import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.body.classList.toggle("dark", next);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      navigate(`/products?search=${encodeURIComponent(search)}`);
    } else {
      navigate("/products");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-3 text-warning" to="/">
          🛍 NovaCart Elite
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarMenu"
        >

          {/* Left Menu */}
          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/categories">
                Categories
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>

          </ul>

          {/* Search */}
          <form
            className="d-flex me-3"
            onSubmit={handleSearch}
          >
            <input
              type="search"
              className="form-control me-2"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              className="btn btn-warning"
              type="submit"
            >
              Search
            </button>
          </form>

          {/* Right Menu */}
          <ul className="navbar-nav align-items-center">

            <li className="nav-item me-2">
              <button
                className="btn btn-outline-light btn-sm"
                onClick={toggleTheme}
              >
                {darkMode ? "☀ Light" : "🌙 Dark"}
              </button>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/wishlist">
                ❤️ Wishlist
                <span className="badge bg-danger ms-1">
                  {wishlist.length}
                </span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                🛒 Cart
                <span className="badge bg-warning text-dark ms-1">
                  {cartItems.length}
                </span>
              </NavLink>
            </li>

            {user ? (
              <>
                <li className="nav-item">
                  <span className="nav-link text-warning fw-semibold">
                    Hi, {user.name || user.email}
                  </span>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/profile"
                  >
                    Profile
                  </NavLink>
                </li>

                <li className="nav-item">
                  <button
                    className="btn btn-danger btn-sm ms-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/register"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;