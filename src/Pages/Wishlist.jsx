import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";


function Wishlist() {


  const {
    wishlist,
    removeFromWishlist
  } = useContext(WishlistContext);



  const {
    addToCart
  } = useContext(CartContext);





  return (


    <div className="container mt-5">


      <h2 className="text-center mb-4">

        ❤️ My Wishlist

      </h2>





      {
        wishlist.length === 0 ?


        (

          <h4 className="text-center">

            Wishlist is empty

          </h4>

        )


        :


        (


          <div className="row g-4">


          {

            wishlist.map(item=>(



              <div

                className="col-md-4"

                key={item.id}

              >



                <div className="card shadow h-100">



                  <img

                    src={item.thumbnail}

                    alt={item.title}

                    className="card-img-top p-3"

                    style={{

                      height:"220px",

                      objectFit:"contain"

                    }}

                  />




                  <div className="card-body">



                    <h5>

                      {item.title}

                    </h5>




                    <p>

                      Price: ${item.price}

                    </p>





                    <button

                      className="btn btn-success w-100 mb-2"

                      onClick={()=>addToCart(item)}

                    >

                      🛒 Add To Cart

                    </button>





                    <button

                      className="btn btn-danger w-100"

                      onClick={()=>removeFromWishlist(item.id)}

                    >

                      Remove ❤️

                    </button>




                  </div>



                </div>



              </div>



            ))

          }


          </div>


        )

      }



    </div>


  );

}


export default Wishlist;