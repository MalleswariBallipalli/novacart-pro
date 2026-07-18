function Beauty() {
  return (
    <div className="container py-4">

      <div className="card border-0 shadow-lg rounded-4">

        <div className="card-body text-center p-5">

          <div className="display-1 mb-3">
            💄
          </div>

          <h2 className="fw-bold text-primary">
            Beauty Collection
          </h2>

          <p className="text-muted fs-5">
            Discover premium beauty products, skincare essentials,
            cosmetics, fragrances, and personal care items designed
            to help you look and feel your best.
          </p>

          <div className="row mt-4">

            <div className="col-md-4">
              <div className="card border-0 bg-light p-3 mb-3">
                <h5>✨ Makeup</h5>
                <p className="text-muted mb-0">
                  Lipsticks, foundations, mascaras, and more.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 bg-light p-3 mb-3">
                <h5>🧴 Skincare</h5>
                <p className="text-muted mb-0">
                  Face wash, moisturizers, serums, and sunscreen.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 bg-light p-3 mb-3">
                <h5>🌸 Fragrances</h5>
                <p className="text-muted mb-0">
                  Perfumes, body sprays, and premium scents.
                </p>
              </div>
            </div>

          </div>

          <button className="btn btn-primary btn-lg mt-4">
            Shop Beauty Products
          </button>

        </div>

      </div>

    </div>
  );
}

export default Beauty;