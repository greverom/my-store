import { useSearchParams } from "react-router-dom";
import { Container, Title } from "../styles/shopping.style"; 
import { ProductListContainer, ProductCardContainer, ProductImageWrapper, ProductImage, ProductTitle, ProductPrice, ProductInfo, CartIconWrapper } from "../styles/product.style";
import { useProductsByCategory } from "../hooks/Product/useProductByCategory";
import Loading from "../components/ui/loading";
import { Subtitle } from "../styles/home.style";
import { Product } from "../interface/products";
import { CartIcon } from "../assets/icons/icons";

const Categories = () => {
  const [searchParams] = useSearchParams();
  const categoryName = searchParams.get("name");

  const { products, loading, error } = useProductsByCategory(categoryName || "");

  const handleAddToCart = (product: Product) => {
    console.log("Producto agregado al carrito:", product);
  };

  return (
    <Container>
      <Title>{categoryName ? categoryName.toUpperCase() : "Todas las Categorías"}</Title>
      <Subtitle>{categoryName ? "Productos en esta categoría:" : "Selecciona una categoría"}</Subtitle>

      {loading && <Loading />}

      {!loading && !error && (
        <ProductListContainer>
          {products.map((product) => (
            <ProductCardContainer key={product.id}>
              <ProductImageWrapper>
                <ProductImage src={product.image} alt={product.title} />
              </ProductImageWrapper>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductInfo>
                <ProductPrice>💲{product.price.toFixed(2)}</ProductPrice>
                <CartIconWrapper onClick={() => handleAddToCart(product)}>
                  <CartIcon />
                </CartIconWrapper>
              </ProductInfo>
            </ProductCardContainer>
          ))}
        </ProductListContainer>
      )}
    </Container>
  );
};

export default Categories;