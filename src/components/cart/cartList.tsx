import { useCart } from "../../hooks/Cart/useCart";
import { CartListContainer, EmptyMessage } from "../../styles/cart.style";
import CartItem from "./cartItem";

const CartList = () => {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <CartListContainer>
      {cart.length > 0 ? (
        cart.map((product) => 
        <CartItem key={product.id} 
                  product={product}
                  onIncrease={increaseQuantity}
                  onDecrease={decreaseQuantity}
                  onRemove={removeFromCart} />)
      ) : (
        <EmptyMessage>Tu carrito está vacío</EmptyMessage>
      )}
    </CartListContainer>
  );
};

export default CartList;