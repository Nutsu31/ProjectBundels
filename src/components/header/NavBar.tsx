import { Link } from "react-router-dom";
import { Box } from "@mui/material";
const NavBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <Link to="/todo-app">Todo</Link>
      <Link to="/pig-dice">Dice Roll</Link>
      <Link to="/blog">Blog</Link>
    </Box>
  );
};

export default NavBar;
