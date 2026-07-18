import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";


function Footer() {


  return (

    <footer className="footer">


      <div className="footer-container">



        {/* Brand */}

        <div className="footer-section">


          <h2>
            NovaCart 🛒
          </h2>


          <p>
            Your premium online shopping destination.
            Discover quality products at the best prices.
          </p>


        </div>





        {/* Quick Links */}

        <div className="footer-section">


          <h3>
            Quick Links
          </h3>


          <Link to="/">
            Home
          </Link>


          <Link to="/products">
            Products
          </Link>


          <Link to="/categories">
            Categories
          </Link>


          <Link to="/contact">
            Contact
          </Link>


        </div>






        {/* Customer */}

        <div className="footer-section">


          <h3>
            Customer Support
          </h3>


          <p>
            Help Center
          </p>


          <p>
            Privacy Policy
          </p>


          <p>
            Terms & Conditions
          </p>


        </div>







        {/* Social */}

        <div className="footer-section">


          <h3>
            Follow Us
          </h3>


          <div className="social-icons">


            <span>
              🌐
            </span>


            <span>
              📘
            </span>


            <span>
              📸
            </span>


            <span>
              🐦
            </span>


          </div>


        </div>




      </div>





      <div className="footer-bottom">


        © 2026 NovaCart. All Rights Reserved.


      </div>



    </footer>


  );

}


export default Footer;