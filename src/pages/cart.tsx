import CartList from "../components/cart/cartList";
import { Container, Title } from "../styles/shopping.style";

export const Cart = () => {

  return (
    <Container>
      <Title>Carrito</Title>
      <CartList />
    </Container>
  );
};

export default Cart;