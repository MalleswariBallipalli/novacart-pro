import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import ProductDetails from "../pages/ProductDetails";

function AppRoutes() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route
  path="/product/:id"
  element={<ProductDetails />}
/>
      </Routes>

      <Footer />
    </>
  );
}

export default AppRoutes;