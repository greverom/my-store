import { AppBar, styled, Box, Toolbar, InputBase, IconButton, Button, Select } from "@mui/material";

export const StyledAppBar = styled(AppBar)({
  backgroundColor: "#131921",
  padding: "5px 15px",
});

export const SearchContainer = styled("div")({
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "5px",
    flexGrow: 1,
    height: "42px",
    maxWidth: "600px",
    overflow: "hidden", 
    "&:focus-within": {
      borderColor: "#f3a847", 
    },
  });

export const CategorySelect = styled(Select)({
    backgroundColor: "#e6e6e6",
    color: "black",
    fontSize: "13px",
    borderRadius: "5px 0 0 5px",
    minWidth: "120px",

    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  });
  
  export const StyledInput = styled(InputBase)({
    flex: 1,
    padding: "0 10px", 
    height: "100%", 
    "& input": {
      padding: "10px 0", 
    },
  });

  export const StyledIconButton = styled(IconButton)({
    backgroundColor: "#f3a847",
    borderRadius: "0 5px 5px 0",
    color: "#555",
    height: "100%", 
    width: "50px", 
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "#d38a06",
    },
  });
  

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  color: "white",
  fontSize: "0.9rem",
});


export const StyledButton = styled(Button)({
  color: "white",
  textTransform: "none",
  display: "flex", 
  alignItems: "center",
  gap: "5px",
});

