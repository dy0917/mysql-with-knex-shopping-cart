import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

export default function ProtectedRoute() {
  const { auth } = useContext(AuthContext);
  console.log("auth", auth);
  return <>{auth.isLogin ? <Outlet /> : <Navigate to="/login" replace />}</>;
}
