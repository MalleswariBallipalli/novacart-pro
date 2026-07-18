import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useContext(WishlistContext);

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="container text-center py-5">
        <div
          className="spinner-border text-primary"
          role="status"
        ></div>

        <h4 className="mt-3">
          Loading Product...
        </h4>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container text-center py-5">
        <h2>Product Not Found</h2>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);

  return (
    <div className="container py-5">

      <div className="row">

        <div className="col-md-5">

          <div className="card shadow border-0 p-4">

            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
              style={{
                height: "400px",
                objectFit: "contain",
              }}
            />

          </div>

        </div>

        <div className="col-md-7">

          <h2 className="fw-bold">
            {product.title}
          </h2>

          <p className="text-muted mt-3">
            {product.description}
          </p>

          <h5 className="mt-4">
            Category:
            <span className="badge bg-primary ms-2">
              {product.category}
            </span>
          </h5>

          <h4 className="text-warning mt-3">
            ⭐ {product.rating.rate}
            <small className="text-muted">
              {" "}
              ({product.rating.count} Reviews)
            </small>
          </h4>

          <h2 className="text-success my-4">
            ${product.price}
          </h2>

          <div className="d-flex gap-3">

            <button
              className="btn btn-primary"
              onClick={() => addToCart(product)}
            >
              🛒 Add to Cart
            </button>

            <button
              className={`btn ${
                inWishlist
                  ? "btn-danger"
                  : "btn-outline-danger"
              }`}
              onClick={() =>
                inWishlist
                  ? removeFromWishlist(product.id)
                  : addToWishlist(product)
              }
            >
              {inWishlist
                ? "❤️ Remove Wishlist"
                : "🤍 Add Wishlist"}
            </button>

          </div>

          <Link
            to="/products"
            className="btn btn-dark mt-4"
          >
            ← Back to Products
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;