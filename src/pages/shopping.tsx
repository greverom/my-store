import ProductList from "../components/product/productList";
import { Container, Title } from "../styles/shopping.style";

const Shopping = () => {
  return (
    <Container>
      <Title>Nuestros Productos</Title>
      <ProductList />
    </Container>
  );
};

export default Shopping;