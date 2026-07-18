import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

import "./Navbar.css";


function Navbar() {


  const {
    totalItems
  } = useContext(CartContext);



  const {
    wishlist
  } = useContext(WishlistContext);



  const {
    user,
    logout
  } = useContext(AuthContext);



  const {
    darkMode,
    toggleTheme
  } = useContext(ThemeContext);



  const navigate = useNavigate();




  return (


<nav className="navbar">



<div className="nav-container">



{/* Logo */}

<Link
to="/"
className="logo"
>

NovaCart 🛒

</Link>





{/* Menu */}

<div className="nav-links">


<Link to="/">
Home
</Link>


<Link to="/products">
Products
</Link>


<Link to="/categories">
Categories
</Link>


<Link to="/about">
About
</Link>


<Link to="/contact">
Contact
</Link>



</div>






{/* Right Actions */}

<div className="nav-actions">





<button
className="theme-btn"
onClick={toggleTheme}
>

{
darkMode
?
"☀️"
:
"🌙"
}

</button>





<Link
to="/wishlist"
className="icon-link"
>

❤️

<span>

{wishlist.length}

</span>

</Link>






<Link
to="/cart"
className="icon-link"
>

🛒

<span>

{totalItems}

</span>

</Link>







{

user ?

(

<button

className="auth-btn"

onClick={()=>{

logout();

navigate("/");

}}

>

Logout

</button>

)

:

(

<Link

to="/login"

className="auth-btn"

>

Login

</Link>

)

}



</div>



</div>


</nav>


);


}


export default Navbar;