import { useEffect } from "react";
import { useAuth } from "context/useAuth";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children, requireAdmin }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || (requireAdmin && !user.isAdmin)) {
      return navigate("/", { require: true });
    }
  }, [user, requireAdmin]);

  return children;
};

export default ProtectedRoute;
