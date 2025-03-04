import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const CartItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 5px;
`;

export const CartItemDetails = styled.div`
  flex-grow: 1;
`;

export const CartItemTitle = styled.h4`
  font-size: 14px;
  margin: 0;
  color: #333;
`;

export const CartItemPrice = styled.p`
  font-size: 14px;
  color: #007bff;
  margin: 5px 0 0;
`;

export const DeleteButton = styled.button`
  background: #ff0000; 
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #cc0000;
  }

  svg {
    font-size: 16px;
  }
`;


export const CartListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
`;

export const EmptyMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: #777;
  margin-top: 20px;
`;


export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

// Botón de cantidad
export const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  background: #ff9900;
  color: white;
  border-radius: 5px;

  &:hover {
    background: #ff6600;
  }
  svg {
    font-size: 14px;
  }
`;

// Texto de cantidad
export const QuantityText = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
