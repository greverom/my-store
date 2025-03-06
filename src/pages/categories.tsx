import CartIcon from "../components/cart/cartIcon";
import Categories from "../components/product/categoryList"; 
import { useCart } from "../hooks/Cart/useCart";
import { CartHeader } from "../styles/cart.style";
import { Container } from "../styles/shopping.style";

const CategoriesPage = () => {
  const {cart} = useCart();
  
  return (
    <Container>
     <CartHeader>
        {cart.length > 0 && <CartIcon/>}
      </CartHeader>
      <Categories />
    </Container>
  );
};

export default CategoriesPage;