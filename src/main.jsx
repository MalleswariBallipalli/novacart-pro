import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./index.css";


import AuthProvider from "./context/AuthContext";
import CartProvider from "./context/CartContext";
import WishlistProvider from "./context/WishlistContext";
import ThemeProvider from "./context/ThemeContext";




ReactDOM.createRoot(

document.getElementById("root")

).render(



<React.StrictMode>



<AuthProvider>


<CartProvider>


<WishlistProvider>


<ThemeProvider>


<App />


</ThemeProvider>


</WishlistProvider>


</CartProvider>


</AuthProvider>



</React.StrictMode>


);