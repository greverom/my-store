import CartIcon from "../components/cart/cartIcon";
import Categories from "../components/product/categoryList"; 
import { useCart } from "../hooks/Cart/useCart";
import { CartHeader } from "../styles/cart.style";
import { Container, Title } from "../styles/shopping.style";

const CategoriesPage = () => {
  const {cart} = useCart();
  
  return (
    <Container>
     <CartHeader>
        <Title>Nuestros Productos</Title>
        {cart.length > 0 && <CartIcon/>}
      </CartHeader>
      <Categories />
    </Container>
  );
};

export default CategoriesPage;