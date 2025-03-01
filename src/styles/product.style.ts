import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export const ProductCardContainer = styled.div`
  display: flex;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  height: 100%; 
  padding: 15px;
  text-align: center;
  flex-direction: column;
  justify-content: space-between; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ProductImageWrapper = styled.div`
  width: 54%;
  margin: auto;
  height: 180px;
  border-radius: 5px;
  overflow: hidden; 
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProductTitle = styled.h3`
  font-size: 16px;
  margin: 10px 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1; 
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  text-align: left;
  color: #007bff;
  font-weight: bold;
  margin-top: auto; 
`;

export const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

export const CartIcon = styled(FaShoppingCart)`
  margin-right: 12px; 
  font-size: 16px; 
  color: white; 
`;