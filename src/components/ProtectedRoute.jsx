import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children }) {
  // Get logged-in user from localStorage
  const user = localStorage.getItem("user");

  // Current location
  const location = useLocation();

  // Redirect to login if user is not authenticated
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  // Render protected page
  return children;
}

export default ProtectedRoute;