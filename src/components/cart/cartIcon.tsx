import { Link } from "react-router-dom";
import { useCart } from "../../hooks/Cart/useCart";
import { CartIconContainer, CartBadge, CartIconStyled } from "../../styles/cart.style";
import { CartIcon as ShoppingCartIcon } from "../../assets/icons/icons"; 

export const CartIcon = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <CartIconContainer>
      <Link to="/cart">
        <CartIconStyled>
          <ShoppingCartIcon />
        </CartIconStyled>
        {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
      </Link>
    </CartIconContainer>
  );
};

export default CartIcon;