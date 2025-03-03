export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  }

export interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  style?: ReactModal.Styles; 
  onAddToCart: (product: Product) => void;
}

export interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}