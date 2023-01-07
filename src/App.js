import React from "react";
import "./index.css";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import { AuthContextProvider } from "context/AuthContext";
import { CartProvider } from "context/CartContext";

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
