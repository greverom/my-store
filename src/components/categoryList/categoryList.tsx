import { CategoryGrid, CategoryItem } from "../../styles/category/category.styles";
import { Container, Title } from "../../styles/shopping.style";

const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];

const CategoryList = () => {
  return (
    <Container>
      <Title>📂 Categorías Disponibles</Title>
      <CategoryGrid>
        {categories.map((category, index) => (
          <CategoryItem key={index} to={`/categories?name=${category}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </CategoryItem>
        ))}
      </CategoryGrid>
    </Container>
  );
};

export default CategoryList;