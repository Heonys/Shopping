import React from "react";
import "./index.css";
import Header from "components/Header";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "context/useAuth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const client = new QueryClient();

  return (
    <AuthContextProvider>
      <QueryClientProvider client={client}>
        <Header />
        <Outlet />
      </QueryClientProvider>
    </AuthContextProvider>
  );
};

export default App;
