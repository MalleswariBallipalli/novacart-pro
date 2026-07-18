import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ==============================
// Shared Components
// ==============================
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

// ==============================
// Lazy Loaded Pages
// ==============================

// Public Pages
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

// Authentication
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

// Shopping
const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist"));

// User
const Profile = lazy(() => import("./pages/Profile"));

// Categories
const Categories = lazy(() => import("./pages/Categories"));
const Beauty = lazy(() => import("./pages/Beauty"));
const Electronics = lazy(() => import("./pages/Electronics"));
const Groceries = lazy(() => import("./pages/Groceries"));

// Error Page
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <BrowserRouter>

      {/* Global Navigation */}
      <Navbar />

      {/* Lazy Loading */}
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        }
      >
        <Routes>

          {/* ===================== */}
          {/* Public Routes */}
          {/* ===================== */}

          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          {/* ===================== */}
          {/* Authentication */}
          {/* ===================== */}

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          {/* ===================== */}
          {/* Shopping */}
          {/* ===================== */}

          <Route path="/cart" element={<Cart />} />

          <Route path="/wishlist" element={<Wishlist />} />

          {/* ===================== */}
          {/* Protected Routes */}
          {/* ===================== */}

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* ===================== */}
          {/* Nested Routes */}
          {/* ===================== */}

          <Route path="/categories" element={<Categories />}>

            <Route path="beauty" element={<Beauty />} />

            <Route path="electronics" element={<Electronics />} />

            <Route path="groceries" element={<Groceries />} />

          </Route>

          {/* ===================== */}
          {/* 404 */}
          {/* ===================== */}

          <Route path="*" element={<NotFound />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;