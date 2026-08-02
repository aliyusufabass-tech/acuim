import { Link, useParams } from "react-router-dom";
import { imageUrl, ServiceCard } from "../components/Cards";
import SectionHeader from "../components/SectionHeader";
import { projects, serviceImages, services as fallbackServices } from "../data/content";
import { useApi } from "../hooks/useApi";

const activityTemplates = {
  Engineering: ["Infrastructure assessment", "Technical design coordination", "Resilience and safety review"],
  "Architecture Design": ["Concept and spatial planning", "Technical documentation", "Performance-led design review"],
  "Public Realm and Open Space Development": ["Public space strategy", "Inclusive streetscape design", "Community environment planning"],
  "Infrastructure Construction": ["Construction planning", "Delivery coordination", "Site implementation support"],
  "Construction Management": ["Schedule and cost control", "Quality supervision", "Contractor coordination"],
  "Urban Analytics": ["Urban data collection", "Scenario analysis", "Decision-support reporting"],
  "Geospatial Services": ["GIS mapping", "Spatial analysis", "Site intelligence reporting"],
  "Urbanism and Planning": ["Master planning", "Development frameworks", "Policy and growth strategy"],
  "Landscape Architecture": ["Landscape concept design", "Ecological integration", "Place-based planting strategy"],
  "Pedestrian Modeling": ["Movement analysis", "Capacity and accessibility review", "Safety recommendations"],
  "Cities Solutions": ["Smart city planning", "Infrastructure integration", "Resilience strategy"],
  "Advisory and Strategic Consulting": ["Feasibility studies", "Development strategy", "Technical advisory"],
  "Environmental Services": ["Environmental assessment", "Sustainability strategy", "Impact mitigation planning"],
  "IT and Cybersecurity": ["Technology assessment", "Cybersecurity review", "Secure systems planning"],
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const fallback = fallbackServices.find((item) => item.slug === slug) || fallbackServices[0];
  const { data } = useApi(`/services/${slug}/`, fallback);
  const service = data || fallback;
  const activities = activityTemplates[service.title] || ["Planning and Assessment", "Design and Technical Delivery", "Project Support and Implementation"];

  return (
    <>
      <section className="detail-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(10,10,10,.74), rgba(10,10,10,.25)), url(${imageUrl(service.hero_image || serviceImages[service.title])})` }}>
        <div>
          <span className="eyebrow">Service</span>
          <h1>{service.title}</h1>
          <p>{service.short_description}</p>
        </div>
      </section>

      <section className="section split">
        <div>
          <span className="eyebrow">Service overview</span>
          <h2>{service.title} for resilient, high-performing project outcomes.</h2>
        </div>
        <p>{service.full_description || service.short_description}</p>
      </section>

      <section className="section">
        <SectionHeader eyebrow="What we do" title="Focused activities under this service" text="ACUIM combines strategic thinking, technical delivery and implementation support around the needs of each project." />
        <div className="card-grid three">
          {activities.map((activity, index) => (
            <article className="detail-panel activity-card" key={activity}>
              <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{activity}</h3>
              <p>{activityDescription(service.title, activity)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section detail-grid">
        <DetailList title="Key capabilities" items={service.capabilities} />
        <DetailList title="Our approach" items={service.approach} />
      </section>

      <section className="section">
        <h2>Related projects</h2>
        <div className="pill-grid">{projects.slice(0, 3).map((project) => <Link key={project.slug} to={`/projects/${project.slug}`}>{project.title}</Link>)}</div>
      </section>

      <section className="section">
        <h2>Related services</h2>
        <div className="card-grid three">{fallbackServices.filter((item) => item.slug !== slug).slice(0, 3).map((item, index) => <ServiceCard key={item.slug} service={item} index={index} />)}</div>
      </section>

      <section className="cta-band">
        <h2>Talk to ACUIM about {service.title.toLowerCase()}.</h2>
        <Link className="button" to="/contact">Contact Our Team</Link>
      </section>
    </>
  );
}

function DetailList({ title, items = [] }) {
  return <div className="detail-panel"><h2>{title}</h2>{items.map((item) => <p key={item}>{item}</p>)}</div>;
}

function activityDescription(serviceTitle, activity) {
  return `${activity} supports ACUIM clients with practical ${serviceTitle.toLowerCase()} input, clear coordination and delivery-focused recommendations.`;
}

