import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">

      {/* Product Image */}
      <div
        className="d-flex justify-content-center align-items-center bg-light p-4"
        style={{ height: "260px" }}
      >
        <img
          src={product.image}
          alt={product.title}
          className="img-fluid"
          style={{
            maxHeight: "180px",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Card Body */}
      <div className="card-body d-flex flex-column">

        {/* Category */}
        <span className="badge bg-primary mb-2 text-capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h5
          className="card-title fw-bold"
          style={{
            minHeight: "55px",
            fontSize: "1rem",
          }}
        >
          {product.title}
        </h5>

        {/* Description */}
        <p
          className="text-muted small flex-grow-1"
          style={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {product.description}
        </p>

        {/* Rating */}
        <div className="mb-2">
          ⭐ {product.rating?.rate} ({product.rating?.count} Reviews)
        </div>

        {/* Price */}
        <h4 className="text-success fw-bold mb-3">
          ${product.price}
        </h4>

        {/* Buttons */}
        <div className="d-grid gap-2">

          <Link
            to={`/products/${product.id}`}
            className="btn btn-outline-primary"
          >
            View Details
          </Link>

          <button className="btn btn-primary">
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;