import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";


function Wishlist() {

  const {
    wishlist,
    removeFromWishlist
  } = useContext(WishlistContext);


  return (

    <div className="container py-5">

      <h1 className="text-center mb-4">
        ❤️ Wishlist
      </h1>


      {
        wishlist.length === 0 ?

        (

          <div className="text-center">

            <h3>
              Wishlist is Empty
            </h3>

            <p>
              Add products to see here.
            </p>

          </div>

        )

        :

        (

          <div className="row">

            {
              wishlist.map((product)=>(

                <div
                  className="col-md-3 mb-4"
                  key={product.id}
                >

                  <div className="card p-3">


                    <img
                      src={product.image}
                      alt={product.title}
                      height="200"
                      style={{
                        objectFit:"contain"
                      }}
                    />


                    <h6 className="mt-3">
                      {product.title}
                    </h6>


                    <p>
                      ${product.price}
                    </p>


                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        removeFromWishlist(product.id)
                      }
                    >
                      Remove
                    </button>


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