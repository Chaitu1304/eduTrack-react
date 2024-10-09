import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ role, component: Component }) {
  const userRole = localStorage.getItem("role");
  if (userRole !== role) {
    return <Navigate to="/" />;
  }
  return <Component />;
}

export default ProtectedRoute;
