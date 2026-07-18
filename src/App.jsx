import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";


// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";


// Pages Lazy Loading

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist"));

const Profile = lazy(() => import("./pages/Profile"));


// Categories

const Categories = lazy(() => import("./pages/Categories"));
const Beauty = lazy(() => import("./pages/Beauty"));
const Electronics = lazy(() => import("./pages/Electronics"));
const Groceries = lazy(() => import("./pages/Groceries"));


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