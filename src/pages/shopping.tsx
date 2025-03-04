import CartIcon from "../components/cart/cartIcon";
import ProductList from "../components/product/productList";
import { useCart } from "../hooks/Cart/useCart";
import { CartHeader } from "../styles/cart.style";
import { Container, Title } from "../styles/shopping.style";

const Shopping = () => {
  const { cart } = useCart();

  return (
    <Container>
      <CartHeader>
        <Title>Nuestros Productos</Title>
        {cart.length > 0 && <CartIcon/>}
      </CartHeader>
      <ProductList />
    </Container>
  );
};

export default Shopping;