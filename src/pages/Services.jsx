import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { fallbackImage, services as fallbackServices } from "../data/content";
import { useApi } from "../hooks/useApi";

const serviceGroups = [
  {
    title: "Design and Planning",
    names: ["Architecture Design", "Urbanism and Planning", "Landscape Architecture", "Public Realm and Open Space Development", "Pedestrian Modeling"],
  },
  {
    title: "Engineering and Delivery",
    names: ["Engineering", "Infrastructure Construction", "Construction Management", "Environmental Services"],
  },
  {
    title: "Digital and Advisory",
    names: ["Urban Analytics", "Geospatial Services", "Cities Solutions", "Advisory and Strategic Consulting", "IT and Cybersecurity"],
  },
];

export default function Services() {
  const { data } = useApi("/services/", fallbackServices);
  const allServices = data?.length ? data : fallbackServices;
  const byTitle = Object.fromEntries(allServices.map((service) => [service.title, service]));
  const featured = allServices.slice(0, 6);

  return (
    <>
      <section className="page-hero services-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(10,10,10,.76), rgba(10,10,10,.22)), url(${fallbackImage})` }}>
        <div>
          <span className="eyebrow">Services</span>
          <h1>Our Services</h1>
        </div>
      </section>

      <section className="section services-intro">
        <p>ACUIM Development Ltd delivers integrated expertise across engineering, architecture, infrastructure, urban development, environmental planning, geospatial technology and strategic consulting. Our multidisciplinary approach helps clients plan, design and deliver sustainable, resilient and high-performing projects.</p>
      </section>

      <section className="section service-directory-section">
        <div className="service-directory-heading">
          <span className="eyebrow">Select a service</span>
          <h2>Find the ACUIM capability that fits your project challenge.</h2>
        </div>

        <div className="service-directory">
          <aside className="service-directory-label">
            <span>Service</span>
          </aside>
          <div className="service-directory-list">
            {serviceGroups.map((group) => (
              <div className="service-directory-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="service-link-grid">
                  {group.names.map((name) => {
                    const service = byTitle[name] || fallbackServices.find((item) => item.title === name);
                    if (!service) return null;
                    return (
                      <Link className="service-directory-link" to={`/services/${service.slug}`} key={name}>
                        <span>{service.title}</span>
                        <ArrowRight size={17} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-feature-strip">
        <span className="eyebrow">Featured capabilities</span>
        <div className="service-feature-links">
          {featured.map((service) => (
            <Link to={`/services/${service.slug}`} key={service.slug}>{service.title}</Link>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <h2>Need a coordinated team for your next project?</h2>
        <Link className="button" to="/contact">Contact ACUIM</Link>
      </section>
    </>
  );
}
