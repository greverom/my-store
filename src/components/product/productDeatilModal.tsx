import Modal from "react-modal";
import { ProductDetailModalProps } from "../../interface/products";
import { useToast } from "../../hooks/Toast/useToast";

import {
  ModalContent, ImageContainer, ProductImage,
  DetailsContainer, ProductTitle, ProductPrice, ProductDescription,
  ProductOptions, CloseButton, ModalStyles
} from "../../styles/productDetailModal";

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ onAddToCart, isOpen, onClose, product, style = ModalStyles }) => {
  const { showToast } = useToast();

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product);
    showToast("Producto agregado al carrito 🛒", "success");
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={style}>

      <ModalContent>
        <CloseButton onClick={onClose}>✕</CloseButton> 
    
        <ImageContainer>
          <ProductImage src={product.image} alt={product.title} />
        </ImageContainer>
    
        <DetailsContainer>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>💲{product.price.toFixed(2)}</ProductPrice>
          <ProductDescription>{product.description}</ProductDescription>
    
          <ProductOptions>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
          </ProductOptions>
        </DetailsContainer>

      </ModalContent>

    </Modal>
  );
};

export default ProductDetailModal;