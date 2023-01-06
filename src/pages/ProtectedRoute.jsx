import React, { useEffect } from "react";
import { useAuth } from "context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ requireAdmin, children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || (requireAdmin && !user.isAdmin)) {
      navigate("/", { replace: true });
    }
  });

  return children;
};

export default ProtectedRoute;
