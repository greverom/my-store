import { useContext } from "react";
import { CartContext } from "../../context/cart/cartContext";

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    console.error("useCart debe ser usado dentro de un CartProvider");
    return {
      cart: [],
      addToCart: () => {},
      removeFromCart: () => {},
      clearCart: () => {},
      increaseQuantity: () => {},
      decreaseQuantity: () => {},
    };
  }
  return context;
};