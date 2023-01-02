import React, { useContext } from "react";
import { FaShopify } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { CartContext } from "context/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const navigate = useNavigate();
  const count = useContext(CartContext);

  console.log(count);

  return (
    <nav className="flex justify-between p-2 mb-2 border-b-2 border-[#ddd]">
      <div className="flex items-center text-red-500 font-semibold text-3xl space-x-3">
        <FaShopify />
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          Shoppy
        </div>
      </div>

      <div className="flex items-center text-lg space-x-4">
        <div className="flex items-center space-x-2 text-xl">
          <span>product</span>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={12} color="secondary">
              <AiOutlineShoppingCart />
            </StyledBadge>
          </IconButton>
        </div>
        <Button variant="contained">Login</Button>
      </div>
    </nav>
  );
};

export default Header;
