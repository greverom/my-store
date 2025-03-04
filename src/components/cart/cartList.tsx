import { useCart } from "../../hooks/Cart/useCart";
import { CartListContainer, EmptyMessage } from "../../styles/cart.style";
import CartItem from "./cartItem";

const CartList = () => {
  const { cart } = useCart();

  return (
    <CartListContainer>
      {cart.length > 0 ? (
        cart.map((product) => <CartItem key={product.id} product={product} />)
      ) : (
        <EmptyMessage>🛒 Tu carrito está vacío</EmptyMessage>
      )}
    </CartListContainer>
  );
};

export default CartList;