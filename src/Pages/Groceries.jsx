function Groceries() {
  return (
    <div className="container py-4">

      <div className="card border-0 shadow-lg rounded-4">

        <div className="card-body text-center p-5">

          <div className="display-1 mb-3">
            🛒
          </div>

          <h2 className="fw-bold text-warning">
            Grocery Collection
          </h2>

          <p className="text-muted fs-5">
            Shop fresh fruits, vegetables, dairy products,
            beverages, snacks, and daily household essentials
            at the best prices.
          </p>

          <div className="row mt-4">

            <div className="col-md-4">
              <div className="card border-0 bg-light p-3 mb-3">
                <h5>🥦 Fresh Vegetables</h5>
                <p className="text-muted mb-0">
                  Farm-fresh vegetables delivered to your doorstep.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 bg-light p-3 mb-3">
                <h5>🍎 Fruits</h5>
                <p className="text-muted mb-0">
                  Seasonal fruits packed with freshness and nutrition.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 bg-light p-3 mb-3">
                <h5>🥛 Daily Essentials</h5>
                <p className="text-muted mb-0">
                  Milk, bread, eggs, rice, oils, and everyday grocery items.
                </p>
              </div>
            </div>

          </div>

          <button className="btn btn-warning btn-lg mt-4">
            Shop Groceries
          </button>

        </div>

      </div>

    </div>
  );
}

export default Groceries;