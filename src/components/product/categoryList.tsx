import { useSearchParams } from "react-router-dom";
import { useProductsByCategory } from "../../hooks/Product/useProductByCategory";
import { useProductModal } from "../../hooks/Product/useProductModal";
import   ProductDetailModal from "./productDeatilModal";
import { CartIcon } from "../../assets/icons/icons";
import   Loading from "../ui/loading";
import { Container, Title } from "../../styles/shopping.style"; 
import { ProductListContainer, ProductCardContainer, ProductImageWrapper, 
         ProductImage, ProductTitle, ProductPrice, ProductInfo, CartIconWrapper 
        } from "../../styles/product.style";
import { useAddToCart } from "../../hooks/Cart/useCart";
import useProducts from "../../hooks/Product/useProducts";

const Categories = () => {
  const { isModalOpen, selectedProduct, handleOpenModal, handleCloseModal } = useProductModal();
  const [ searchParams] = useSearchParams();
  const   categoryName = searchParams.get("name");
  const allProducts = useProducts();

  const categoryProducts = useProductsByCategory(categoryName || "");
  const products = categoryName ? categoryProducts.products : allProducts.products;
  const loading = categoryName ? categoryProducts.loading : allProducts.loading;
  const error = categoryName ? categoryProducts.error : allProducts.error;
  
  const { handleAddToCart } = useAddToCart();

  return (
    <>
      <Container>
        <Title>{categoryName ? categoryName.toUpperCase() : ""}</Title>
        {loading && <Loading />}
        {!loading && !error && (
          <ProductListContainer>
            {products.map((product) => (
              <ProductCardContainer key={product.id} onClick={() => handleOpenModal(product)}> 
                <ProductImageWrapper>
                  <ProductImage src={product.image} alt={product.title} />
                </ProductImageWrapper>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductInfo>
                  <ProductPrice>💲{product.price.toFixed(2)}</ProductPrice>
                  <CartIconWrapper onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}>
                    <CartIcon />
                  </CartIconWrapper>
                </ProductInfo>
              </ProductCardContainer>
            ))}
          </ProductListContainer>
        )}
      </Container>

      <ProductDetailModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        product={selectedProduct} 
        onAddToCart={handleAddToCart}
      />
    </>
  );
};

export default Categories;