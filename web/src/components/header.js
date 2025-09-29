import "./header.css";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">Solana.</div>

      {/* Navigation */}
      <nav className="nav">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/shop" className="nav-link">
          Shop
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
          <NavLink to="/signup" className="nav-link">
          Signup
        </NavLink>
         <NavLink to="/users" className="nav-link">
          Users
        </NavLink>
      </nav>

      {/* Hamburger  */}
      <div className="hamburger">
        <button>
          <svg
            className="icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
