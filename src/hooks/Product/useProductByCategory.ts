import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../../interface/products";

export const useProductsByCategory = (category: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        setProducts(response.data);
      } catch (err) {
        console.log(err)
        setError("Error al obtener los productos de la categoría");
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchProducts();
    }
  }, [category]);

  return { products, loading, error };
};