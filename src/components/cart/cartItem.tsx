import { CartItemProps } from "../../interface/products";
import { useCart } from "../../hooks/Cart/useCart";
import { FaTrash } from "react-icons/fa";
import { CartItemContainer, CartItemImage, CartItemDetails,
         CartItemTitle, CartItemPrice, QuantityButton,
         QuantityControls, QuantityText}from "../../styles/cart.style";
 
const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart(); 
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
          <QuantityButton onClick={() => removeFromCart(product.id)}> 
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