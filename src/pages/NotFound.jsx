import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found">
      <span className="eyebrow">404</span>
      <h1>Page not found</h1>
      <p>The page you are looking for may have moved or is no longer available.</p>
      <Link className="button" to="/">Return Home</Link>
    </section>
  );
}
