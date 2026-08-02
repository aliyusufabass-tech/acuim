import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Brand from "./Brand";

const navItems = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Projects", "/projects"],
  ["Insights", "/insights"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled || open ? "is-solid" : ""}`}>
      <Brand />
      <button className="icon-button menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={open ? "nav-links is-open" : "nav-links"}>
        {navItems.slice(0, 2).map(([label, path]) => (
          <NavLink key={path} to={path} onClick={() => setOpen(false)}>
            {label}
          </NavLink>
        ))}
        <div className="dropdown">
          <NavLink to="/services" onClick={() => setOpen(false)}>
            Services <ChevronDown size={15} />
          </NavLink>
          <div className="dropdown-menu">
            <Link to="/services/engineering">Engineering</Link>
            <Link to="/services/urbanism-planning">Urbanism & Planning</Link>
            <Link to="/services/it-cybersecurity">IT & Cybersecurity</Link>
          </div>
        </div>
        {navItems.slice(2, 4).map(([label, path]) => (
          <NavLink key={path} to={path} onClick={() => setOpen(false)}>
            {label}
          </NavLink>
        ))}
        <NavLink className="nav-cta" to="/contact" onClick={() => setOpen(false)}>
          Contact Us
        </NavLink>
      </nav>
    </header>
  );
}
