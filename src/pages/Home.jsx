import { ArrowRight, CheckCircle2, Globe2, Leaf, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import { InsightCard, ProjectCard } from "../components/Cards";
import SectionHeader from "../components/SectionHeader";
import { fallbackImage, insights as fallbackInsights, projects as fallbackProjects } from "../data/content";
import { useApi } from "../hooks/useApi";

export default function Home() {
  const projects = useApi("/projects/?featured=true", fallbackProjects);
  const insights = useApi("/insights/", fallbackInsights);

  return (
    <>
      <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(10,10,10,.78), rgba(10,10,10,.18)), url(${fallbackImage})` }}>
        <div className="hero-content">
          <span className="eyebrow">Cities, infrastructure and resilient places</span>
          <h1>Shaping Sustainable Cities and Infrastructure</h1>
          <p>ACUIM Development Ltd delivers integrated development solutions that create resilient, functional and sustainable communities.</p>
          <div className="hero-actions">
            <Link className="button" to="/projects">View Our Projects</Link>
            <Link className="button secondary" to="/contact">Contact Our Team</Link>
          </div>
        </div>
      </section>

      <section className="section split">
        <div>
          <span className="eyebrow">About ACUIM</span>
          <h2>Integrated consulting for complex built environment challenges.</h2>
        </div>
        <p>We bring built-environment strategy, infrastructure planning, environmental insight and decision support into one coordinated practice for public and private clients. We are committed to delivering high-quality, innovative, and sustainable projects that exceed our clients' expectations.</p>
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
        <div><Globe2 /><h3>Sustainable cities</h3><p>Planning frameworks that connect mobility, public realm, infrastructure and growth.</p></div>
        <div><LineChart /><h3>Evidence-led decisions</h3><p>Data-informed insight for feasibility, site selection and project prioritization.</p></div>
        <div><Leaf /><h3>Responsible development</h3><p>Strategies that improve environmental and social outcomes over the long term.</p></div>
      </section>

      <section className="section stats">
        {[["14", "Technical disciplines"], ["10", "Project categories"], ["100%", "Separated API architecture"], ["24h", "Inquiry visibility in admin"]].map(([number, label]) => (
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


