import { useState, useEffect } from "react";
import { Product } from "../../interface/products";

export const useProductModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = (product: Product) => {
    console.log("Producto agregado al carrito:", product);
  };

  useEffect(() => {
    if (selectedProduct) {
      setIsModalOpen(true);
    }
  }, [selectedProduct]);

  return {
    isModalOpen,
    selectedProduct,
    handleOpenModal,
    handleCloseModal,
    handleAddToCart,
  };
};