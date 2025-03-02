import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #222;
  text-transform: uppercase;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-top: 10px;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  justify-content: center;
`;

export const CategoryItem = styled(Link)`
  display: block;
  padding: 15px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  text-align: center;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #0056b3;
  }
`;