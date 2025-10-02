import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// components
import Header from "./components/header";
import Footer from "./components/footer";
import Slider from "./components/slider";
import Card from "./components/card";

// pages
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import ShoppingPage from "./pages/shop";
import SignUpForm from "./pages/signup";
import Login from "./pages/login";

// users crud page
import UsersCrud from "./UsersCrud";

// ✅ ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Please log in to access this page.");
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <Router>
      <Header />

      <Routes>
        {/*  Public Home Page */}
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Card />
            </>
          }
        />

        {/*  Protected Pages (Require Login) */}
        <Route
          path="/shop"
          element={
            <ProtectedRoute>
              <ShoppingPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <AboutPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <ContactPage />
            </ProtectedRoute>
          }
        />

        {/*  Auth Pages */}
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<Login />} />

        {/*  Users CRUD (optional protected) */}
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <UsersCrud />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
