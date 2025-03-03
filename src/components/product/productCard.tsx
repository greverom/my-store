import { useState } from "react";
import { ProductCardProps } from "../../interface/productCardProps";
import { 
  ProductImage, ProductTitle, ProductPrice, 
  ProductCardContainer, ProductImageWrapper,
  ProductInfo, CartIconWrapper
} from "../../styles/product.style";
import { CartIcon } from "../../assets/icons/icons";
import ProductDetailModal from "./productDeatilModal";

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ProductCardContainer onClick={() => setIsModalOpen(true)}>
        <ProductImageWrapper> 
          <ProductImage src={product.image} alt={product.title} />
        </ProductImageWrapper>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductInfo>
          <ProductPrice>💲{product.price.toFixed(2)}</ProductPrice>
          <CartIconWrapper onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}>
            <CartIcon />
          </CartIconWrapper>
        </ProductInfo>
      </ProductCardContainer>


      <ProductDetailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        product={product}
        onAddToCart={onAddToCart}
      />
    </>
  );
};

export default ProductCard;