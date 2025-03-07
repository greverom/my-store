import Categories from "../components/product/categoryList"; 
import { CartHeader } from "../styles/cart.style";
import { Container } from "../styles/shopping.style";

const CategoriesPage = () => {
  
  return (
    <Container>
     <CartHeader>
      </CartHeader>
      <Categories />
    </Container>
  );
};

export default CategoriesPage;