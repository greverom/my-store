
import { ProductCardContainer, ProductListContainer } from "../../styles/product.style";
import { Container, Title } from "../../styles/shopping.style";

const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];

const CategoryList = () => {
  return (
    <Container>
      <Title>📂 Categorías Disponibles</Title>
      <ProductListContainer> 
        {categories.map((category, index) => (
          <ProductCardContainer key={index} as="a" href={`/categories?name=${category}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </ProductCardContainer>
        ))}
      </ProductListContainer>
    </Container>
  );
};

export default CategoryList;