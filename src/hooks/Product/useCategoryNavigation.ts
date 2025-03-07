import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SelectChangeEvent } from "@mui/material";

export const useCategoryNavigation = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos los departamentos");
  const navigate = useNavigate();

  const handleCategoryChange = (event: SelectChangeEvent<unknown>) => { 
    const category = event.target.value as string; 
    setSelectedCategory(category);

    if (category !== "Todos los departamentos") {
      navigate(`/categories?name=${encodeURIComponent(category)}`);
    } else {
      navigate("/categories");
    }
  };

  return { selectedCategory, handleCategoryChange };
};