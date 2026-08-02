import { ArrowRight, CheckCircle2, Globe2, Leaf, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import { InsightCard, ProjectCard, ServiceCard } from "../components/Cards";
import SectionHeader from "../components/SectionHeader";
import { fallbackImage, insights as fallbackInsights, projects as fallbackProjects, services as fallbackServices } from "../data/content";
import { useApi } from "../hooks/useApi";

export default function Home() {
  const services = useApi("/services/?featured=true", fallbackServices);
  const projects = useApi("/projects/?featured=true", fallbackProjects);
  const insights = useApi("/insights/", fallbackInsights);

  return (
    <>
      <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(10,10,10,.78), rgba(10,10,10,.18)), url(${fallbackImage})` }}>
        <div className="hero-content">
          <span className="eyebrow">Engineering, cities and infrastructure</span>
          <h1>Shaping Sustainable Cities and Infrastructure</h1>
          <p>ACUIM Development Ltd delivers innovative engineering, architecture, urban planning and infrastructure solutions that create resilient, functional and sustainable communities.</p>
          <div className="hero-actions">
            <Link className="button" to="/services">Explore Our Services</Link>
            <Link className="button secondary" to="/contact">Contact Our Team</Link>
          </div>
        </div>
      </section>

      <section className="section split">
        <div>
          <span className="eyebrow">ACUIM Development Ltd</span>
          <h2>Integrated consulting for complex built environment challenges.</h2>
        </div>
        <p>We bring engineering, architecture, infrastructure, environmental planning, geospatial intelligence and strategic advisory into one coordinated practice for public and private clients.</p>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Featured services" title="Multidisciplinary expertise" text="Focused technical services for resilient places, infrastructure and digital systems." />
        <div className="card-grid">{(services.data?.length ? services.data : fallbackServices).slice(0, 6).map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}</div>
      </section>

      <section className="section dark-band">
        <SectionHeader eyebrow="Why choose ACUIM" title="Practical excellence with international ambition" />
        <div className="value-grid">
          {["Integrated technical teams", "Evidence-based recommendations", "Sustainable delivery thinking", "Clear communication and governance"].map((item) => (
            <div className="value-item" key={item}><CheckCircle2 /> {item}</div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Featured projects" title="Work shaped by place, data and delivery" />
        <div className="card-grid three">{(projects.data?.length ? projects.data : fallbackProjects).slice(0, 3).map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </section>

      <section className="section expertise">
        <div><Globe2 /><h3>Urban systems</h3><p>Planning frameworks that connect mobility, public realm, infrastructure and growth.</p></div>
        <div><LineChart /><h3>Urban analytics</h3><p>Data-led insight for feasibility, site selection and project prioritization.</p></div>
        <div><Leaf /><h3>Sustainability</h3><p>Responsible development strategies that improve environmental and social outcomes.</p></div>
      </section>

      <section className="section stats">
        {[["14", "Service disciplines"], ["10", "Project categories"], ["100%", "Separated API architecture"], ["24h", "Inquiry visibility in admin"]].map(([number, label]) => (
          <div key={label}><strong>{number}</strong><span>{label}</span></div>
        ))}
      </section>

      <section className="section">
        <SectionHeader eyebrow="Latest insights" title="Thinking for sustainable development" />
        <div className="card-grid three">{(insights.data?.length ? insights.data : fallbackInsights).slice(0, 3).map((insight) => <InsightCard key={insight.slug} insight={insight} />)}</div>
      </section>

      <section className="cta-band">
        <h2>Ready to discuss a development, infrastructure or technology challenge?</h2>
        <Link className="button" to="/contact">Start a Conversation <ArrowRight size={18} /></Link>
      </section>
    </>
  );
}
