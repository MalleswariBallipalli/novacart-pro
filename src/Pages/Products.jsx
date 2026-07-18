import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "all";
  const sort = searchParams.get("sort") || "";

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const updateParams = (key, value) => {
    const params = Object.fromEntries(searchParams.entries());

    if (value) {
      params[key] = value;
    } else {
      delete params[key];
    }

    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let data = [...products];

    // Search
    data = data.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

    // Category
    if (category !== "all") {
      data = data.filter(
        (product) => product.category === category
      );
    }

    // Sort
    if (sort === "low-high") {
      data.sort((a, b) => a.price - b.price);
    }

    if (sort === "high-low") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [products, search, category, sort]);

  return (
    <div className="container py-5">

      {/* Header */}

      <div className="text-center mb-5">
        <h1 className="fw-bold display-5">
          🛍 Our Premium Products
        </h1>

        <p className="text-muted">
          Discover high-quality products at amazing prices.
        </p>
      </div>

      {/* Filters */}

      <div className="row g-3 mb-4">

        <div className="col-lg-4">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="🔍 Search products..."
            value={search}
            onChange={(e) =>
              updateParams("search", e.target.value)
            }
          />
        </div>

        <div className="col-lg-4">
          <select
            className="form-select form-select-lg"
            value={category}
            onChange={(e) =>
              updateParams("category", e.target.value)
            }
          >
            <option value="all">
              All Categories
            </option>

            <option value="men's clothing">
              Men's Clothing
            </option>

            <option value="women's clothing">
              Women's Clothing
            </option>

            <option value="electronics">
              Electronics
            </option>

            <option value="jewelery">
              Jewellery
            </option>

          </select>
        </div>

        <div className="col-lg-4">
          <select
            className="form-select form-select-lg"
            value={sort}
            onChange={(e) =>
              updateParams("sort", e.target.value)
            }
          >
            <option value="">
              Sort By
            </option>

            <option value="low-high">
              Price: Low to High
            </option>

            <option value="high-low">
              Price: High to Low
            </option>

          </select>
        </div>

      </div>

      <div className="d-flex justify-content-between mb-4">

        <h5>
          Products Found:
          <span className="text-primary">
            {" "}
            {filteredProducts.length}
          </span>
        </h5>

      </div>

      {loading ? (
        <div className="text-center py-5">

          <div
            className="spinner-border text-primary"
            role="status"
          />

          <p className="mt-3">
            Loading Products...
          </p>

        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center py-5">

          <h2>😕</h2>

          <h4>No Products Found</h4>

        </div>
      ) : (
        <div className="row">

          {filteredProducts.map((product) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
              key={product.id}
            >
              <ProductCard product={product} />
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Products;