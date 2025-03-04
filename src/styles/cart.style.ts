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

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: red;

  &:hover {
    color: darkred;
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

export const ClearCartButton = styled.button`
  display: block;
  margin: 0 auto 20px;
  padding: 10px 15px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #cc0000;
  }
`;