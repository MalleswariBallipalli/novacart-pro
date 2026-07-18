import { useState, useContext } from "react";
import {
  useNavigate,
  useLocation,
  Link,
} from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!password.trim()) {
      setError("Password is required");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const success = login(email, password);

      if (success) {
        navigate(from, { replace: true });
      } else {
        setError("Invalid email or password");
      }

      setLoading(false);
    }, 500);
  };

  return (
    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-lg-5 col-md-7">

          <div className="card shadow-lg border-0 rounded-4">

            <div className="card-body p-5">

              <h2 className="text-center fw-bold mb-3">
                Welcome Back
              </h2>

              <p className="text-center text-muted mb-4">
                Sign in to continue
              </p>

              {error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin}>

                <div className="mb-3">
                  <label className="form-label">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                  />
                </div>

                <div className="mb-3">

                  <label className="form-label">
                    Password
                  </label>

                  <div className="input-group">

                    <input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                    />

                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>

                  </div>

                </div>

                <div className="form-check mb-4">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="remember"
                  />

                  <label
                    className="form-check-label"
                    htmlFor="remember"
                  >
                    Remember Me
                  </label>

                </div>

                <button
                  className="btn btn-success w-100"
                  disabled={loading}
                >
                  {loading
                    ? "Signing In..."
                    : "Sign In"}
                </button>

              </form>

              <hr />

              <p className="text-center mb-0">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="fw-bold text-decoration-none"
                >
                  Register
                </Link>
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;