import { useRef } from "react";
import CartIcon from "../components/cart/cartIcon";
import Categories from "../components/product/categoryList"; 
import { useCart } from "../hooks/Cart/useCart";
import { CartHeader } from "../styles/cart.style";
import { Container } from "../styles/shopping.style";
import { useGsapScroll } from "../hooks/animation/useGsapScroll";

const CategoriesPage = () => {
  const {cart} = useCart();

  const productListRef = useRef<HTMLDivElement | null>(null); 
  useGsapScroll(productListRef);
  
  return (
    <Container ref={productListRef}>
     <CartHeader>
        {cart.length > 0 && <CartIcon/>}
      </CartHeader>
      <Categories />
    </Container>
  );
};

export default CategoriesPage;