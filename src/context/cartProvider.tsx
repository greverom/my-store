import { useState, ReactNode } from "react";
import { Product } from "../interface/products";
import { CartContext } from "./cartContext";

// Provider del contexto
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // Agregar producto al carrito
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remover producto del carrito
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter(product => product.id !== id));
  };

  // Vaciar carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};