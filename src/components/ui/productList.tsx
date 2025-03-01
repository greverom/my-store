import useProducts from "../../hooks/useProducts";
import { Product } from "../../interface/products";
import { ProductListContainer } from "../../styles/productList.styles";
import ProductCard from "../ui/productCard";

const ProductList = () => {
  const { products, loading, error } = useProducts();

  const handleAddToCart = (product: Product) => {
    console.log("Producto agregado al carrito:", product);
  };

  if (loading) return <p>⏳ Cargando productos...</p>;
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