import { ProductCardProps } from "../../interface/productCardProps";
import   Button from "../ui/button";
import { ProductImage, ProductTitle, ProductPrice, 
         ProductCardContainer, ButtonWrapper, 
         CartIcon,
         ProductImageWrapper} from "../../styles/productList.styles";

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <ProductCardContainer>
    <ProductImageWrapper> 
      <ProductImage src={product.image} alt={product.title} />
    </ProductImageWrapper>
    <ProductTitle>{product.title}</ProductTitle>
    <ProductPrice>💲{product.price.toFixed(2)}</ProductPrice>
    <ButtonWrapper>
    <Button variant="primary" onClick={() => onAddToCart(product)}>
      <CartIcon /> Agregar al Carrito
    </Button>
    </ButtonWrapper>
  </ProductCardContainer>
  );
};

export default ProductCard;