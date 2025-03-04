export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  quantity?: number;
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

export interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void; 
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
}

export interface CartItemProps {
  product: Product;
  onIncrease: () => void; 
  onDecrease: () => void; 
  onRemove: () => void;
}