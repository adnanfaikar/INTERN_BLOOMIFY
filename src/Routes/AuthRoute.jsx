import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import { useEffect } from "react";

const AuthRoute = () => {
  const isAuthenticated = useAuth();
  useEffect(() => {
    console.log("Is Authenticated:", isAuthenticated);
  }, [isAuthenticated]);

  return isAuthenticated ? <Navigate to="/" replace={true} /> : <Outlet />;
};

export default AuthRoute;
