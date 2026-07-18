function Electronics() {
  return (
    <div className="container py-4">

      <div className="card border-0 shadow-lg rounded-4">

        <div className="card-body text-center p-5">

          <div className="display-1 mb-3">
            💻
          </div>

          <h2 className="fw-bold text-success">
            Electronics Collection
          </h2>

          <p className="text-muted fs-5">
            Explore the latest smartphones, laptops, smartwatches,
            headphones, gaming accessories, and premium electronic
            gadgets from top brands.
          </p>

          <div className="row mt-4">

            <div className="col-md-4">
              <div className="card border-0 bg-light p-3 mb-3">
                <h5>📱 Smartphones</h5>
                <p className="text-muted mb-0">
                  Latest Android and iPhone models with advanced features.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 bg-light p-3 mb-3">
                <h5>💻 Laptops</h5>
                <p className="text-muted mb-0">
                  Powerful laptops for students, professionals, and gamers.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 bg-light p-3 mb-3">
                <h5>🎧 Accessories</h5>
                <p className="text-muted mb-0">
                  Headphones, smartwatches, keyboards, mice, and more.
                </p>
              </div>
            </div>

          </div>

          <button className="btn btn-success btn-lg mt-4">
            Shop Electronics
          </button>

        </div>

      </div>

    </div>
  );
}

export default Electronics;