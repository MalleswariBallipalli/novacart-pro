import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load logged-in user when app starts
  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");

    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  // Register
  const register = (userData) => {
    // Save registered account
    localStorage.setItem(
      "registeredUser",
      JSON.stringify(userData)
    );

    // Login automatically after registration
    localStorage.setItem(
      "currentUser",
      JSON.stringify(userData)
    );

    setUser(userData);
  };

  // Login
  const login = (email, password) => {
    const savedUser = JSON.parse(
      localStorage.getItem("registeredUser")
    );

    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify(savedUser)
      );

      setUser(savedUser);

      return true;
    }

    return false;
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;