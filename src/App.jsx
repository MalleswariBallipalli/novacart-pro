import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";


// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

import About from "./pages/About";
import Contact from "./pages/Contact";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

import Profile from "./pages/Profile";

import Categories from "./pages/Categories";
import Beauty from "./pages/Beauty";
import Electronics from "./pages/Electronics";
import Groceries from "./pages/Groceries";

import NotFound from "./pages/NotFound";


function App() {

  return (

    <>

      <Navbar />


      <main>

        <Routes>


          {/* Home */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* Products */}

          <Route
            path="/products"
            element={<Products />}
          />


          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />



          {/* Static Pages */}

          <Route
            path="/about"
            element={<About />}
          />


          <Route
            path="/contact"
            element={<Contact />}
          />



          {/* Authentication */}

          <Route
            path="/login"
            element={<Login />}
          />


          <Route
            path="/register"
            element={<Register />}
          />



          {/* Shopping */}

          <Route
            path="/cart"
            element={<Cart />}
          />


          <Route
            path="/wishlist"
            element={<Wishlist />}
          />



          {/* Protected */}

          <Route

            path="/profile"

            element={

              <ProtectedRoute>

                <Profile />

              </ProtectedRoute>

            }

          />



          {/* Categories Nested Routing */}

          <Route

            path="/categories"

            element={<Categories />}

          >


            <Route

              path="beauty"

              element={<Beauty />}

            />


            <Route

              path="electronics"

              element={<Electronics />}

            />


            <Route

              path="groceries"

              element={<Groceries />}

            />


          </Route>



          {/* 404 */}

          <Route

            path="*"

            element={<NotFound />}

          />


        </Routes>


      </main>



      <Footer />


    </>

  );

}


export default App;