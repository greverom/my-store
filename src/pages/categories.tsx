import { useSearchParams } from "react-router-dom";
import { Container, Title } from "../styles/shopping.style"; 
import { ProductListContainer, ProductCardContainer, ProductImageWrapper, ProductImage, ProductTitle, ProductPrice, ProductInfo, CartIconWrapper } from "../styles/product.style";
import { useProductsByCategory } from "../hooks/Product/useProductByCategory";
import { useProductModal } from "../hooks/Product/useProductModal";
import Loading from "../components/ui/loading";
import { Subtitle } from "../styles/home.style";
import { CartIcon } from "../assets/icons/icons";
import ProductDetailModal from "../components/product/productDeatilModal";

const Categories = () => {
  const [searchParams] = useSearchParams();
  const categoryName = searchParams.get("name");

  const { products, loading, error } = useProductsByCategory(categoryName || "");
  const { isModalOpen, selectedProduct, handleOpenModal, handleCloseModal, handleAddToCart } = useProductModal();

  return (
    <>
      <Container>
        <Title>{categoryName ? categoryName.toUpperCase() : "Todas las Categorías"}</Title>
        <Subtitle>{categoryName ? "Productos en esta categoría:" : "Selecciona una categoría"}</Subtitle>

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