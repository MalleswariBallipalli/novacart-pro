import { useContext } from "react";
import { CartContext } from "../context/CartContext";


function Cart() {


  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
  } = useContext(CartContext);




  const totalPrice = cartItems.reduce(

    (total, item) => 
      total + item.price * item.quantity,

    0

  );





  return (


    <div className="container mt-5">



      <h2 className="text-center mb-4">

        🛒 Shopping Cart

      </h2>





      {

        cartItems.length === 0 ?


        (

          <div className="text-center">


            <h4>

              Your cart is empty

            </h4>


          </div>


        )

        :


        (


          <>



          {

            cartItems.map((item)=>(



              <div

                className="card mb-3 shadow"

                key={item.id}

              >



                <div className="row g-0 align-items-center">





                  <div className="col-md-2 text-center">



                    <img

                      src={item.thumbnail}

                      alt={item.title}

                      className="img-fluid p-3"

                      style={{

                        height:"120px",

                        objectFit:"contain"

                      }}

                    />



                  </div>







                  <div className="col-md-6">



                    <h5>

                      {item.title}

                    </h5>



                    <p>

                      Price: ${item.price}

                    </p>



                    <p>

                      Quantity: {item.quantity}

                    </p>



                  </div>







                  <div className="col-md-4">





                    <button

                      className="btn btn-secondary me-2"

                      onClick={()=>decreaseQuantity(item.id)}

                    >

                      -

                    </button>






                    <span className="fw-bold">

                      {item.quantity}

                    </span>






                    <button

                      className="btn btn-success ms-2"

                      onClick={()=>increaseQuantity(item.id)}

                    >

                      +

                    </button>






                    <button

                      className="btn btn-danger ms-3"

                      onClick={()=>removeFromCart(item.id)}

                    >

                      Delete

                    </button>




                  </div>





                </div>



              </div>



            ))

          }








          <div className="card shadow p-4 mt-4">



            <h3>

              Total Price: ${totalPrice.toFixed(2)}

            </h3>




            <button

              className="btn btn-primary mt-3"

            >

              Proceed To Checkout

            </button>



          </div>




          </>


        )


      }



    </div>


  );


}


export default Cart;