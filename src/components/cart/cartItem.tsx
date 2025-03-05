import { CartItemProps } from "../../interface/products";
import { useCart, useRemoveFromCart } from "../../hooks/Cart/useCart";
import { FaTrash } from "react-icons/fa";
import { CartItemContainer, CartItemImage, CartItemDetails,
         CartItemTitle, CartItemPrice, QuantityButton,
         QuantityControls, QuantityText}from "../../styles/cart.style";
 
const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const { increaseQuantity, decreaseQuantity } = useCart(); 
  const { handleRemoveFromCart } = useRemoveFromCart();
  const quantity = product.quantity ?? 1; 

  return (
    <CartItemContainer>

      <CartItemImage src={product.image} alt={product.title} />

      <CartItemDetails>
        <CartItemTitle>{product.title}</CartItemTitle>
        <CartItemPrice>💲{product.price.toFixed(2)}</CartItemPrice>
      </CartItemDetails>

      <QuantityControls>
        { quantity > 1 ? (
          <QuantityButton onClick={() => decreaseQuantity(product.id)}>-</QuantityButton>
        ) : (
          <QuantityButton onClick={() => handleRemoveFromCart(product.id)}> 
          <FaTrash /> 
        </QuantityButton>
        )}
        
        <QuantityText>{product.quantity}</QuantityText>
        <QuantityButton onClick={() => increaseQuantity(product.id)}>+</QuantityButton>
      </QuantityControls>

    </CartItemContainer>
  );
};

export default CartItem;