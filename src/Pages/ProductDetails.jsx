import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

import "./ProductDetails.css";


function ProductDetails() {


  const { id } = useParams();


  const [product,setProduct] = useState(null);

  const [loading,setLoading] = useState(true);



  const { addToCart } = useContext(CartContext);


  const {
    wishlist,
    addToWishlist,
    removeFromWishlist
  } = useContext(WishlistContext);




  useEffect(()=>{


    const fetchProduct = async()=>{


      try{


        const response = await fetch(

          `https://fakestoreapi.com/products/${id}`

        );


        const data = await response.json();


        setProduct(data);


      }

      catch(error){

        console.log(error);

      }

      finally{

        setLoading(false);

      }


    };


    fetchProduct();


  },[id]);





  if(loading){


    return (

      <div className="details-loader">

        Loading Product...

      </div>

    );


  }





  if(!product){


    return (

      <div className="details-loader">

        Product Not Found

      </div>

    );


  }





  const isWishlisted =
  wishlist.some(
    item=>item.id===product.id
  );




  const wishlistHandler=()=>{


    if(isWishlisted){

      removeFromWishlist(product.id);

    }

    else{

      addToWishlist(product);

    }


  };





return (

<div className="product-details-container">


<div className="container">


<div className="details-card">





{/* Image Section */}


<div className="details-image">


<img

src={product.image}

alt={product.title}

/>


</div>






{/* Info Section */}


<div className="details-info">



<p className="details-category">

{product.category}

</p>




<h1>

{product.title}

</h1>





<div className="details-rating">

⭐⭐⭐⭐⭐

<span>
{product.rating?.rate || 4.5}
</span>

</div>






<h2>

${product.price}

</h2>






<p className="description">

{product.description}

</p>







<div className="details-buttons">


<button

className="add-cart"

onClick={()=>addToCart(product)}

>

🛒 Add To Cart

</button>





<button

className={
isWishlisted
?
"wishlist-btn active"
:
"wishlist-btn"
}

onClick={wishlistHandler}

>

❤️ Wishlist

</button>



</div>





<Link

to="/products"

className="back-link"

>

← Back To Products

</Link>



</div>


</div>


</div>


</div>


);


}


export default ProductDetails;