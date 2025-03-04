import CartList from "../components/cart/cartList";
import { useCart } from "../hooks/Cart/useCart";
import { ClearCartButton } from "../styles/cart.style";
import { Container, Title } from "../styles/shopping.style";

export const Cart = () => {
  const { cart, clearCart } = useCart();

  return (
    <Container>
      <Title>Carrito</Title>
      {cart.length > 0 && (
        <ClearCartButton onClick={clearCart}>Vaciar Carrito</ClearCartButton>
      )}
      <CartList />
    </Container>
  );
};

export default Cart;