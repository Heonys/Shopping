import React, { useContext, useEffect, useState } from "react";
import { FaShopify } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";

import { Button } from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { CartContext } from "context/CartContext";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import { useAuth } from "context/AuthContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const { count } = useContext(CartContext);

  const { user, login, logout } = useAuth();

  return (
    <nav className="flex justify-between p-2 mb-2 border-b-2 border-[#ddd]">
      <div className="flex items-center text-red-500 font-semibold text-3xl space-x-3">
        <FaShopify />

        <Link to="/" className="cursor-pointer">
          Shoppy
        </Link>
      </div>

      <div className="flex items-center text-lg gap-4 font-semibold">
        <div className="flex items-center gap-2 text-xl">
          <span>products</span>

          {user && (
            <Link to="/cart">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={count.toString()} color="secondary">
                  <AiOutlineShoppingCart />
                </StyledBadge>
              </IconButton>
            </Link>
          )}

          {user && user.isAdmin && (
            <Link to="/product/new" className="text-2xl">
              <BsPencil />
            </Link>
          )}
        </div>

        {!user && (
          <>
            <Button onClick={login} variant="contained">
              Login
            </Button>
          </>
        )}

        {user && (
          <>
            <Avatar src={user.photoURL} />
            <span className="hidden md:block text-sm">{`${user.displayName} 님`}</span>
            <Button onClick={logout} variant="contained">
              Logout
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
