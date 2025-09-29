import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Header from './components/header';
import Footer from "./components/footer.js";
import Slider from './components/slider';
import Card from "./components/card.js";

// pages
import AboutPage from "./pages/about.js";
import ContactPage from "./pages/contact.js";
import ShoppingPage from "./pages/shop.js";
import SignUpForm from "./pages/signup.js";

// users crud page
import UsersCrud from "./UsersCrud.js";


function App() {

    useEffect(() => {
      fetch('/api')
      .then((res)=>{return res.json()})
      .then((data)=>{
        console.log(data)})
      },[])


  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Card />
            </>
          }
        />
        <Route path="/shop" element={<ShoppingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup" element={<SignUpForm />} />

        <Route path="/users" element={<UsersCrud />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
