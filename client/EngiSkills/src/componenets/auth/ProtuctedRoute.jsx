import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

function ProtuctedRoute({ children, user, redrict = "/login" }) {
  const navigate = useNavigate();

  if (!user) {
    return <Navigate to={redrict} />;
  }
  return children ? children : <Outlet />;
}

export default ProtuctedRoute;
