import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ShoppingCart } from "react-feather"; // install: npm install react-feather

export default function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">Solana.</div>

      {/* Navigation Links */}
      <nav className="nav">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/shop" className="nav-link">Shop</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
        <NavLink to="/users" className="nav-link">Users</NavLink>
      </nav>

      {/* Right Side: Cart + Auth */}
      <div className="header-actions">
        <button className="cart-btn">
          <ShoppingCart />
        </button>

        {isLoggedIn ? (
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        ) : (
          <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
        )}
      </div>
    </header>
  );
}
