import "./footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="footerr">
      <div className="footer-top">
        {/* Left Section */}
        <div className="footer-left">
          <h3 className="footer-logo">
            Solana
          </h3>
          <p className="footer-tagline">
            Thoughtful marketing for growing dental practices.
          </p>
        </div>

        {/* Middle Section  */}
        <div className="footer-middle">
          <p className="footer-subscribe-text">
            Dental marketing insights for clever dentists direct to your inbox
          </p>
          <div className="footer-subscribe">
            <input type="email" placeholder="Your e-mail" />
            <button>Subscribe</button>
          </div>
        </div>

        {/* Right Section  */}
        <div className="footer-right">
          <div className="footer-socials">
            <p className="footer-title">Follow Us</p>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
          <div className="footer-call">
            <p className="footer-title">Call Us</p>
            <p className="footer-phone">+92 3062 3226</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>
          © 2023 Think32. Dental Marketing Agency Sydney, Australia. All Rights Reserved
        </p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
}

