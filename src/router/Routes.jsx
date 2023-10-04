import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export const ProtectedRoute = ({ element }) => {
  const { user } = useContext(UserContext);

  return user?.userId ? <>{element}</> : <Navigate to="/log-in" />;
};

export const PublicRoute = ({ element }) => {
  const { user } = useContext(UserContext);

  return user?.userId ? <Navigate to="/" /> : <>{element}</>;
};
