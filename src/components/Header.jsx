import React from "react";
import { GiCherry } from "react-icons/gi";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useAuth } from "context/useAuth";

const Header = () => {
  const { user, login, logout } = useAuth();

  return (
    <div className="flex justify-between bg-[#253d87] p-2 ">
      <Link to="/" className="flex items-center space-x-2">
        <GiCherry className="text-white text-4xl" />
        <p className="text-pink-500 text-2xl font-bold">CherryPick</p>
      </Link>

      <div className="flex space-x-3 text-white items-center ">
        <Link to="/product">
          <div className="text-xl">product</div>
        </Link>
        {user && user.isAdmin && (
          <Link to="/newProduct">
            <BsPencilSquare className="text-2xl" />
          </Link>
        )}
        <Link to="/cart">
          <AiOutlineShoppingCart className="text-2xl" />
        </Link>
        {!user && (
          <Button onClick={login} className="bg-white font-semibold">
            Login
          </Button>
        )}
        {user && (
          <>
            <img className="rounded-full w-8 h-8 " src={user.photoURL} alt="" />
            <span className="hidden md:block">{user.displayName} 님</span>
            <Button onClick={logout} className="bg-white font-semibold">
              Logout
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
