import { CartItemProps } from "../../interface/products";
import { useCart } from "../../hooks/Cart/useCart";
import {CartItemContainer, CartItemImage, CartItemDetails,
  CartItemTitle, CartItemPrice, RemoveButton,
        } from "../../styles/cart.style";

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const { removeFromCart } = useCart(); 

  return (
    <CartItemContainer>
      <CartItemImage src={product.image} alt={product.title} />
      <CartItemDetails>
        <CartItemTitle>{product.title}</CartItemTitle>
        <CartItemPrice>💲{product.price.toFixed(2)}</CartItemPrice>
      </CartItemDetails>
      <RemoveButton onClick={() => removeFromCart(product.id)}>❌</RemoveButton>
    </CartItemContainer>
  );
};

export default CartItem;