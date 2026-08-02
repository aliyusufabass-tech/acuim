import { Link } from "react-router-dom";
import { ServiceCard } from "../components/Cards";
import SectionHeader from "../components/SectionHeader";
import { fallbackImage, services as fallbackServices } from "../data/content";
import { useApi } from "../hooks/useApi";

export default function Services() {
  const { data } = useApi("/services/", fallbackServices);
  const allServices = data?.length ? data : fallbackServices;

  return (
    <>
      <section className="page-hero services-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(10,10,10,.76), rgba(10,10,10,.22)), url(${fallbackImage})` }}>
        <div>
          <span className="eyebrow">Services</span>
          <h1>Our Services</h1>
          <p>ACUIM Development Ltd delivers integrated expertise across engineering, architecture, infrastructure, urban development, environmental planning, geospatial technology and strategic consulting. Our multidisciplinary approach helps clients plan, design and deliver sustainable, resilient and high-performing projects.</p>
        </div>
      </section>

      <section className="section">
        <SectionHeader title="Integrated capabilities" text="Explore all available ACUIM service areas. Each card opens a dedicated detail page with capabilities, approach and related work." />
        <div className="card-grid">{allServices.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}</div>
      </section>

      <section className="cta-band">
        <h2>Need a coordinated team for your next project?</h2>
        <Link className="button" to="/contact">Contact ACUIM</Link>
      </section>
    </>
  );
}
