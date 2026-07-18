import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";


// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";


// Pages Lazy Loading

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import Profile from "./Pages/Profile";
import Categories from "./Pages/Categories";
import Beauty from "./Pages/Beauty";
import Electronics from "./Pages/Electronics";
import Groceries from "./Pages/Groceries";
import NotFound from "./Pages/NotFound";


// Admin

const AdminProducts = lazy(
  () => import("./pages/AdminProducts")
);


// Error

const NotFound = lazy(
  () => import("./pages/NotFound")
);



function App() {


return (

<>

<Navbar />


<Suspense

fallback={

<div className="loader-container">

<h3>
Loading...
</h3>

</div>

}

>


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

path="/product/:id"

element={<ProductDetails />}

/>





{/* Pages */}

<Route

path="/about"

element={<About />}

/>


<Route

path="/contact"

element={<Contact />}

/>





{/* Auth */}

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






{/* Protected Profile */}

<Route

path="/profile"

element={

<ProtectedRoute>

<Profile />

</ProtectedRoute>

}

/>







{/* Categories Nested */}

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






{/* Admin CRUD */}

<Route

path="/admin/products"

element={<AdminProducts />}

/>







{/* 404 */}

<Route

path="*"

element={<NotFound />}

/>




</Routes>


</Suspense>



<Footer />


</>

);


}


export default App;