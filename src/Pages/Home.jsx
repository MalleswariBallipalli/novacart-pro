import { Link } from "react-router-dom";


function Home() {


  return (

    <div>


      {/* Hero Section */}

      <section 
        className="bg-dark text-white py-5"
      >

        <div className="container">

          <div className="row align-items-center">


            <div className="col-md-6">


              <h1 className="display-4 fw-bold">

                Welcome to NovaCart Elite

              </h1>


              <p className="lead mt-3">

                Discover premium products with
                amazing quality and modern shopping
                experience.

              </p>



              <Link 
                to="/products"
                className="btn btn-primary btn-lg mt-3"
              >

                Shop Now

              </Link>


            </div>



            <div className="col-md-6 text-center">


              <img

                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"

                alt="Shopping"

                className="img-fluid rounded shadow"

              />


            </div>



          </div>


        </div>


      </section>





      {/* Features Section */}


      <section className="container py-5">


        <h2 className="text-center fw-bold mb-5">

          Why Choose NovaCart?

        </h2>



        <div className="row g-4">



          <div className="col-md-4">

            <div className="card shadow h-100 text-center p-4">


              <h3>
                🚚
              </h3>


              <h5>
                Fast Delivery
              </h5>


              <p>
                Quick and reliable delivery service.
              </p>


            </div>

          </div>





          <div className="col-md-4">


            <div className="card shadow h-100 text-center p-4">


              <h3>
                🔒
              </h3>


              <h5>
                Secure Payment
              </h5>


              <p>
                Safe and secure shopping experience.
              </p>


            </div>


          </div>






          <div className="col-md-4">


            <div className="card shadow h-100 text-center p-4">


              <h3>
                ⭐
              </h3>


              <h5>
                Premium Quality
              </h5>


              <p>
                Best products selected for customers.
              </p>


            </div>


          </div>



        </div>


      </section>





      {/* Call To Action */}


      <section className="bg-primary text-white text-center py-5">


        <div className="container">


          <h2>
            Start Shopping Today
          </h2>


          <p>
            Explore our latest products collection.
          </p>



          <Link

            to="/products"

            className="btn btn-light"

          >

            View Products

          </Link>



        </div>


      </section>



    </div>

  );

}


export default Home;