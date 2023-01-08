import React from "react";
import "./index.css";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import { AuthContextProvider } from "context/AuthContext";
import { CartProvider } from "context/CartContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const App = () => {
  const client = new QueryClient();

  return (
    <CartProvider>
      <AuthContextProvider>
        <QueryClientProvider client={client}>
          <Header />
          <Outlet />
        </QueryClientProvider>
      </AuthContextProvider>
    </CartProvider>
  );
};

export default App;
