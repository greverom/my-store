
import { ProductCardProps } from "../../interface/productCardProps";
import { ProductListContainer, ProductImage, ProductTitle, ProductPrice } from "../../styles/productList.styles";
import Button from "./button";


const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <ProductListContainer>
      <ProductImage src={product.image} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>💲{product.price.toFixed(2)}</ProductPrice>
      <Button variant="primary" onClick={() => onAddToCart(product)}>
        🛒 Agregar al Carrito
      </Button>
    </ProductListContainer>
  );
};

export default ProductCard;