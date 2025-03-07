
import { MenuItem, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RoomIcon from "@mui/icons-material/Room";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import CartIcon from "../../cart/cartIcon";
import { StyledAppBar, StyledToolbar, SearchContainer, StyledBox,
         StyledInput, StyledButton, StyledIconButton, CategorySelect,
        } from "../../../styles/navbar";
import { useCategoryNavigation } from "../../../hooks/Product/useCategoryNavigation";

const categories = [
  "Todos los departamentos",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const Navbar = () => {
  const { selectedCategory, handleCategoryChange } = useCategoryNavigation();

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        
        <Typography variant="h6" component={Link} to="/" sx={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
          CindyStore
        </Typography>

        <StyledBox>
          <RoomIcon sx={{ mr: 0.5 }} />
          <Typography variant="body2">Enviar a Gregorio</Typography>
        </StyledBox>

        <SearchContainer>
        <CategorySelect value={selectedCategory} onChange={handleCategoryChange}>
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </CategorySelect>

          <StyledInput placeholder="Buscar..." />
          <StyledIconButton>
            <SearchIcon />
          </StyledIconButton>
        </SearchContainer>

        <StyledButton as={Link} {...{ to: "/account" }}>
          <AccountCircleIcon />
          Cuenta y Listas
        </StyledButton>

        <StyledButton as={Link} {...{ to: "/orders" }}>
          Devoluciones y Pedidos
        </StyledButton>

        <CartIcon /> 

      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;