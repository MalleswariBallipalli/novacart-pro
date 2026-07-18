import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Register() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const { name, email, password, confirmPassword } = formData;

    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    const userData = {
      name: name.trim(),
      email: email.trim(),
      password,
    };

    register(userData);

    setSuccess("Registration successful! Redirecting...");

    setTimeout(() => {
      navigate("/login");
    }, 1200);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">

        <div className="col-lg-5 col-md-7">

          <div className="card shadow-lg border-0 rounded-4">

            <div className="card-body p-5">

              <h2 className="text-center fw-bold mb-3">
                Create Account
              </h2>

              <p className="text-center text-muted mb-4">
                Register to start shopping
              </p>

              {error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )}

              {success && (
                <div className="alert alert-success">
                  {success}
                </div>
              )}

              <form onSubmit={handleRegister}>

                <div className="mb-3">
                  <label className="form-label">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
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
                      name="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={handleChange}
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

                <div className="mb-4">
                  <label className="form-label">
                    Confirm Password
                  </label>

                  <div className="input-group">

                    <input
                      type={
                        showConfirm
                          ? "text"
                          : "password"
                      }
                      name="confirmPassword"
                      className="form-control"
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />

                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() =>
                        setShowConfirm(!showConfirm)
                      }
                    >
                      {showConfirm ? "Hide" : "Show"}
                    </button>

                  </div>
                </div>

                <button
                  className="btn btn-primary w-100"
                  disabled={loading}
                >
                  {loading
                    ? "Creating Account..."
                    : "Register"}
                </button>

              </form>

              <hr />

              <p className="text-center mb-0">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="fw-bold text-decoration-none"
                >
                  Sign In
                </Link>
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Register;