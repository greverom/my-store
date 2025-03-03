import { Styles } from "react-modal";
import styled from "styled-components";

export const ModalStyles: Styles = {
overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    inset: 0, 
},
content: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "none",
    border: "none",
    padding: "0",
    width: "100%",
    maxWidth: "800px",
    minHeight: "100vh",
    overflowY: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
},
};

export const ModalContent = styled.div`
  display: flex;
  width: auto;
  max-width: 800px;
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  outline: none;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 20px;
`;

export const ProductImage = styled.img`
  max-width: 90%;
  height: auto;
  object-fit: contain;
`;

export const DetailsContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 10px;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 10px;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 15px;
`;

export const ProductOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex start;
  gap: 12px;
  margin-top: 15px;

  button {
    padding: 12px 18px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    gap: 8px; 
    min-width: 150px;

    &:first-child {
      background-color: #ff9900;
      color: white;

      &:hover {
        background-color: #e68a00;
        transform: scale(1.05);
      }
    }


  }
`;


export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;