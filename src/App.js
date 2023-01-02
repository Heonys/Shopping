import React from "react";
import "./index.css";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import { CartProvider } from "context/CartContext";

const App = () => {
  return (
    <>
      <CartProvider>
        <Header />
        <Outlet />
      </CartProvider>
    </>
  );
};

export default App;
