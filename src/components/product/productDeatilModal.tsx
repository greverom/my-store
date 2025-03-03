import Modal from "react-modal";
import { Product } from "../../interface/products";
import {
  ModalContent, ImageContainer, ProductImage,
  DetailsContainer, ProductTitle, ProductPrice, ProductDescription,
  ProductOptions, CloseButton, ModalStyles
} from "../../styles/productDetailModal";

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  style?: ReactModal.Styles; 
  onAddToCart: (product: Product) => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({onAddToCart, isOpen, onClose, product, style = ModalStyles }) => {
  if (!product) return null;

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
            <button onClick={() => onAddToCart(product)}>Agregar al carrito</button>

          </ProductOptions>
        </DetailsContainer>
      </ModalContent>
    </Modal>
  );
};

export default ProductDetailModal;