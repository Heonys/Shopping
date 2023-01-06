import React from "react";
import "./index.css";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import { CartProvider } from "context/CartContext";
import { AuthContextProvider } from "context/AuthContext";

const App = () => {
  return (
    <CartProvider>
      <AuthContextProvider>
        <Header />
        <Outlet />
      </AuthContextProvider>
    </CartProvider>
  );
};

export default App;
