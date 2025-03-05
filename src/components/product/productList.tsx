import   useProducts from "../../hooks/Product/useProducts";
import   ProductCard from "./productCard";
import { ProductListContainer } from "../../styles/product.style";
import   Loading from "../ui/loading";
import { useAddToCart } from "../../hooks/Cart/useCart";

const ProductList = () => {
  const { products, loading} = useProducts();
  const { handleAddToCart } = useAddToCart();
  if (loading) return <Loading/>;

  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;