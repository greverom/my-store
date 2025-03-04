import Categories from "../components/product/categoryList"; 
import { Container, Title } from "../styles/shopping.style";

const CategoriesPage = () => {
  return (
    <Container>
      <Title>Explora nuestras Categorías</Title>
      <Categories />
    </Container>
  );
};

export default CategoriesPage;