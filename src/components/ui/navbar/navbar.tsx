import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "lucide-react";

export const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2", padding: "10px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: "none", color: "white" }}>
          🛒 Mi Tienda
        </Typography>

        {/* Campo de búsqueda */}
        <TextField
          variant="outlined"
          placeholder="Buscar productos..."
          size="small"
          sx={{ backgroundColor: "white", borderRadius: "5px", width: "250px" }}
        />

        {/* Enlaces y Botón de Carrito */}
        <div>
          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>
          <Button component={Link} to="/register" color="inherit">
            Registrarse
          </Button>
          <IconButton component={Link} to="/cart" color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};