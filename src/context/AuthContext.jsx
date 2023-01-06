import { createContext, useContext, useEffect, useState } from "react";
import { login, logout, onUserStateChange } from "api/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
