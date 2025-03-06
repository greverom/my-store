import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  padding: 20px auto;
  margin-top: 3rem;
`;

export const ProductTitle = styled.h3`
   font-size: 13px;
  margin: 10px 0;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 20px;

  div {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    transition: max-width 0.3s ease, overflow 0.3s ease;
  }
`;

export const ProductCardContainer = styled.div`
  display: flex;
  background: white;
  border-radius: 8px;
  border: 1px solid rgb(227, 227, 227);
  overflow: hidden;
  height: 100%; 
  padding: 5px 20px;
  text-align: center;
  flex-direction: column;
  justify-content: space-between; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

   &:hover ${ProductTitle} div {
    overflow: visible; 
    text-overflow: clip; 
    max-width: none; 
  }
`;

export const ProductImageWrapper = styled.div`
  width: 70%;
  margin: auto;
  height: 180px;
  border-radius: 5px;
  overflow: hidden; 
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 100%;

`;

export const ProductPrice = styled.p`
  font-size: 16px;
  color: rgb(84, 84, 84);
  font-weight: bold;
`;

export const CartIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 22px;
    height: 22px;
    fill: rgb(84, 84, 84);
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
