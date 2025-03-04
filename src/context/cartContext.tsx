import { createContext } from "react";
import { CartContextType } from "../interface/products";

export const CartContext = createContext<CartContextType | undefined>(undefined);