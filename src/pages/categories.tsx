import { useSearchParams } from "react-router-dom";
import { Container } from "../styles/shopping.style";
import { Subtitle, Title } from "../styles/home.style";

const Categories = () => {
  const [searchParams] = useSearchParams();
  const categoryName = searchParams.get("name") || "Todas las categorías";

  return (
    <Container>
      <Title>📦 {categoryName.toUpperCase()}</Title>
      <Subtitle>Aquí se mostrarán los productos de esta categoría.</Subtitle>
    </Container>
  );
};

export default Categories;