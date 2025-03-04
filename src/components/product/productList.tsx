import   useProducts from "../../hooks/Product/useProducts";
import { Product } from "../../interface/products";
import   ProductCard from "./productCard";
import { ProductListContainer } from "../../styles/product.style";
import   Loading from "../ui/loading";
import { useCart } from "../../hooks/Cart/useCart";

const ProductList = () => {
  const { products, loading} = useProducts();
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    //console.log("Producto agregado al carrito:", product);
  };

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