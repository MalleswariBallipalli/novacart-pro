import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="text-center">

        <div className="display-1 fw-bold text-danger">
          404
        </div>

        <div className="display-3 mb-3">
          😕
        </div>

        <h2 className="fw-bold mb-3">
          Oops! Page Not Found
        </h2>

        <p className="text-muted mb-4">
          The page you are looking for might have been removed,
          renamed, or is temporarily unavailable.
        </p>

        <Link
          to="/"
          className="btn btn-primary btn-lg me-3"
        >
          🏠 Back to Home
        </Link>

        <Link
          to="/products"
          className="btn btn-outline-dark btn-lg"
        >
          🛍 Browse Products
        </Link>

      </div>
    </div>
  );
}

export default NotFound;