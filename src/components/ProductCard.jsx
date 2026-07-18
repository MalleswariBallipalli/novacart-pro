import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

import "./ProductCard.css";


function ProductCard({ product }) {


  const {
    addToCart
  } = useContext(CartContext);



  const {
    wishlist,
    addToWishlist,
    removeFromWishlist
  } = useContext(WishlistContext);



  const isWishlisted =
    wishlist.some(
      (item)=>item.id === product.id
    );




  const toggleWishlist=()=>{


    if(isWishlisted){

      removeFromWishlist(product.id);

    }

    else{

      addToWishlist(product);

    }


  };




return (

<div className="product-card">



{/* Wishlist */}

<button

className={
isWishlisted
?
"wishlist active"
:
"wishlist"
}

onClick={toggleWishlist}

>

❤️

</button>





{/* Image */}


<div className="product-image">


<img

src={product.image}

alt={product.title}

/>


</div>





{/* Content */}


<div className="product-content">



<h5>

{product.title.substring(0,45)}

...

</h5>




<div className="rating">

⭐⭐⭐⭐⭐

<span>

(120)

</span>

</div>





<p className="category">

{product.category}

</p>





<h3>

${product.price}

</h3>





<div className="card-buttons">



<Link

to={`/products/${product.id}`}

className="view-btn"

>

View

</Link>




<button

className="cart-btn"

onClick={()=>
addToCart(product)
}

>

Add Cart

</button>



</div>




</div>



</div>

);


}


export default ProductCard;