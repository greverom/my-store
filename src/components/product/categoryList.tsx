import { useSearchParams } from "react-router-dom";
import { useProductsByCategory } from "../../hooks/Product/useProductByCategory";
import { useProductModal } from "../../hooks/Product/useProductModal";
import ProductDetailModal from "./productDeatilModal";
import Loading from "../ui/loading";
import { Title } from "../../styles/shopping.style"; 
import { ProductListContainer } from "../../styles/product.style";
import { useAddToCart } from "../../hooks/Cart/useCart";
import useProducts from "../../hooks/Product/useProducts";
import ProductCard from "./productCard"; 

const Categories = () => {
  const { isModalOpen, selectedProduct, handleCloseModal } = useProductModal();
  const [searchParams] = useSearchParams();
  const categoryName = searchParams.get("name");
  const allProducts = useProducts();

  const categoryProducts = useProductsByCategory(categoryName || "");
  const products = categoryName ? categoryProducts.products : allProducts.products;
  const loading = categoryName ? categoryProducts.loading : allProducts.loading;
  const error = categoryName ? categoryProducts.error : allProducts.error;
  const { handleAddToCart } = useAddToCart();

  return (
    <>
        <Title>{categoryName ? categoryName.toUpperCase() : ""}</Title>

        {loading && <Loading />}
        {!loading && !error && (

          <ProductListContainer>
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={handleAddToCart}
              />
            ))}
          </ProductListContainer>
        )}

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