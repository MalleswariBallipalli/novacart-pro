import { NavLink, Outlet } from "react-router-dom";

function Categories() {
  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h1 className="fw-bold">Shop by Categories</h1>
        <p className="text-muted">
          Browse products from your favorite category.
        </p>
      </div>

      <div className="row g-4 justify-content-center">

        <div className="col-md-4">
          <NavLink
            to="beauty"
            className="text-decoration-none"
          >
            <div className="card shadow border-0 h-100 text-center p-4">

              <div className="display-3 mb-3">
                💄
              </div>

              <h4 className="fw-bold">
                Beauty
              </h4>

              <p className="text-muted">
                Cosmetics, skincare and personal care products.
              </p>

              <button className="btn btn-primary">
                Explore
              </button>

            </div>
          </NavLink>
        </div>

        <div className="col-md-4">
          <NavLink
            to="electronics"
            className="text-decoration-none"
          >
            <div className="card shadow border-0 h-100 text-center p-4">

              <div className="display-3 mb-3">
                💻
              </div>

              <h4 className="fw-bold">
                Electronics
              </h4>

              <p className="text-muted">
                Mobiles, laptops, gadgets and accessories.
              </p>

              <button className="btn btn-success">
                Explore
              </button>

            </div>
          </NavLink>
        </div>

        <div className="col-md-4">
          <NavLink
            to="groceries"
            className="text-decoration-none"
          >
            <div className="card shadow border-0 h-100 text-center p-4">

              <div className="display-3 mb-3">
                🛒
              </div>

              <h4 className="fw-bold">
                Groceries
              </h4>

              <p className="text-muted">
                Fresh fruits, vegetables and daily essentials.
              </p>

              <button className="btn btn-warning">
                Explore
              </button>

            </div>
          </NavLink>
        </div>

      </div>

      <hr className="my-5" />

      {/* Nested Route Output */}
      <Outlet />

    </div>
  );
}

export default Categories;