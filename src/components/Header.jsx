import React from "react";
import { FaShopify } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

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
          <AiOutlineShoppingCart />
        </div>
        <Button variant="contained">Login</Button>
      </div>
    </nav>
  );
};

export default Header;
