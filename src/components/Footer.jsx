import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Brand from "./Brand";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Brand />
          <p>Integrated engineering, architecture, infrastructure, technology and urban development consulting.</p>
        </div>
        <div>
          <h3>Company</h3>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/insights">Insights</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <p><Mail size={16} /> acuimdevelopment@gmail.com</p>
          <p><Phone size={16} /> +225 703 717 173</p>
          <p><MapPin size={16} /> International development consulting</p>
        </div>
        <div>
          <h3>Legal</h3>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms and Conditions</Link>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} ACUIM Development Ltd. All rights reserved.</div>
    </footer>
  );
}
