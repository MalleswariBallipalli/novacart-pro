function About() {


  return (

    <div className="container mt-5">


      {/* Hero */}

      <section className="text-center mb-5">


        <h1 className="fw-bold">

          About NovaCart Elite

        </h1>


        <p className="lead mt-3">

          NovaCart Elite is a modern e-commerce platform
          designed to provide a premium shopping experience
          with quality products, secure payments and fast delivery.

        </p>


      </section>





      {/* Features */}


      <div className="row g-4">



        <div className="col-md-4">


          <div className="card p-4 text-center shadow-sm">


            <div className="fs-1">

              🛒

            </div>


            <h4 className="mt-3">

              Wide Product Range

            </h4>


            <p>

              Explore electronics, fashion, beauty
              and accessories in one place.

            </p>


          </div>


        </div>







        <div className="col-md-4">


          <div className="card p-4 text-center shadow-sm">


            <div className="fs-1">

              🔒

            </div>


            <h4 className="mt-3">

              Secure Shopping

            </h4>


            <p>

              Safe transactions and protected
              customer information.

            </p>


          </div>


        </div>








        <div className="col-md-4">


          <div className="card p-4 text-center shadow-sm">


            <div className="fs-1">

              🚚

            </div>


            <h4 className="mt-3">

              Fast Delivery

            </h4>


            <p>

              Quick and reliable delivery
              directly to your doorstep.

            </p>


          </div>


        </div>



      </div>






      {/* Mission */}


      <section className="mt-5 mb-5">


        <div className="card p-5 shadow-sm">


          <h2>

            Our Mission

          </h2>


          <p className="mt-3">


            Our mission is to make online shopping simple,
            affordable and enjoyable by providing high-quality
            products with excellent customer service.


          </p>


        </div>


      </section>





    </div>

  );

}


export default About;