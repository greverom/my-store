import   useProducts from "../hooks/useProducts";
import { Product } from "../interface/products";
import   ProductCard from "../components/product/productCard";
import { ProductListContainer } from "../styles/productList.styles";
import Loading from "../components/ui/loading";

const ProductList = () => {
  const { products, loading, error } = useProducts();

  const handleAddToCart = (product: Product) => {
    console.log("Producto agregado al carrito:", product);
  };

  if (loading) return <Loading/>;
  if (error) return <p>❌ {error}</p>;

  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;