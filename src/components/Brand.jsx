import { Link } from "react-router-dom";
import logo from "../assets/logo/acuim-logo.jpeg";

export default function Brand() {
  return (
    <Link className="brand" to="/" aria-label="ACUIM Development home">
      <img className="brand-logo" src={logo} alt="ACUIM Development Ltd logo" />
      <span>
        <strong>ACUIM</strong>
        <small>Development Ltd</small>
      </span>
    </Link>
  );
}
