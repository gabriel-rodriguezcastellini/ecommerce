import { UserAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export function RouteProtector({ children }) {
  const { user } = UserAuth();

  if (user == null) {
    return <Navigate to={"/login"} />;
  }

  return children;
}
