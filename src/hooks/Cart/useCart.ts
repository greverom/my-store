import { useContext } from "react";
import { CartContext } from "../../context/cart/cartContext";
import { useToast } from "../Toast/useToast";
import { Product } from "../../interface/products";

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};

export const useAddToCart = () => {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    showToast("Producto agregado al carrito 🛒", "success");
  };

  return { handleAddToCart };
};

export const useRemoveFromCart = () => {
  const { removeFromCart } = useCart();
  const { showToast } = useToast();

  const handleRemoveFromCart = (id: number) => {
    removeFromCart(id);
    showToast("Producto eliminado del carrito ❌", "error");
  };

  return { handleRemoveFromCart };
};