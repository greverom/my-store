import { CartItemProps } from "../../interface/products";
import { useCart } from "../../hooks/Cart/useCart";
import {CartItemContainer, CartItemImage, CartItemDetails,
  CartItemTitle, CartItemPrice, RemoveButton,
  QuantityButton,
  QuantityControls,
  QuantityText,
        } from "../../styles/cart.style";

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart(); 

  return (
    <CartItemContainer>
      <CartItemImage src={product.image} alt={product.title} />
      <CartItemDetails>
        <CartItemTitle>{product.title}</CartItemTitle>
        <CartItemPrice>💲{product.price.toFixed(2)}</CartItemPrice>
      </CartItemDetails>
      <QuantityControls>
        <QuantityButton onClick={() => decreaseQuantity(product.id)}>-</QuantityButton>
        <QuantityText>{product.quantity}</QuantityText>
        <QuantityButton onClick={() => increaseQuantity(product.id)}>+</QuantityButton>
      </QuantityControls>
      <RemoveButton onClick={() => removeFromCart(product.id)}>❌</RemoveButton>
    </CartItemContainer>
  );
};

export default CartItem;