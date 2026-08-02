import { Link, useParams } from "react-router-dom";
import { imageUrl, ServiceCard } from "../components/Cards";
import { projects, services as fallbackServices } from "../data/content";
import { useApi } from "../hooks/useApi";

export default function ServiceDetail() {
  const { slug } = useParams();
  const fallback = fallbackServices.find((item) => item.slug === slug) || fallbackServices[0];
  const { data } = useApi(`/services/${slug}/`, fallback);
  const service = data || fallback;
  return (
    <>
      <section className="detail-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(10,10,10,.74), rgba(10,10,10,.25)), url(${imageUrl(service.hero_image)})` }}><span className="eyebrow">Service</span><h1>{service.title}</h1><p>{service.full_description || service.short_description}</p></section>
      <section className="section detail-grid">
        <DetailList title="Key capabilities" items={service.capabilities} />
        <DetailList title="Service benefits" items={service.benefits} />
        <DetailList title="Our approach" items={service.approach} />
      </section>
      <section className="section"><h2>Related projects</h2><div className="pill-grid">{projects.slice(0, 3).map((project) => <Link key={project.slug} to={`/projects/${project.slug}`}>{project.title}</Link>)}</div></section>
      <section className="section"><h2>Related services</h2><div className="card-grid three">{fallbackServices.filter((item) => item.slug !== slug).slice(0, 3).map((item, index) => <ServiceCard key={item.slug} service={item} index={index} />)}</div></section>
    </>
  );
}

function DetailList({ title, items = [] }) {
  return <div className="detail-panel"><h2>{title}</h2>{items.map((item) => <p key={item}>{item}</p>)}</div>;
}
