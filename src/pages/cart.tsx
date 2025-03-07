import CartList from "../components/cart/cartList";
import { CartHeader } from "../styles/cart.style";
import { Container, Title } from "../styles/shopping.style";

export const Cart = () => {

  return (
    <Container>
      <CartHeader>
        <Title>Carrito</Title>
      </CartHeader>
      <CartList />
    </Container>
  );
};

export default Cart;