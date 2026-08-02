import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";

export default function About() {
  const values = ["Professional Excellence", "Innovation", "Sustainability", "Integrity", "Collaboration", "Community Impact"];
  return (
    <>
      <section className="page-hero"><span className="eyebrow">About ACUIM</span><h1>Integrated expertise for better communities and infrastructure.</h1></section>
      <section className="section split">
        <h2>ACUIM Development Ltd is a multidisciplinary development and consulting company delivering integrated solutions across engineering, architecture, infrastructure, urban development, environmental planning, technology and geospatial services.</h2>
        <p>Our approach is practical, collaborative and evidence-led. We help clients move from strategy to implementation with clarity across technical, environmental, social and operational priorities.</p>
      </section>
      <section className="section two-column">
        <div className="statement"><span>Mission</span><p>To deliver practical, innovative and sustainable development solutions that improve communities, infrastructure and the built environment.</p></div>
        <div className="statement"><span>Vision</span><p>To become a trusted leader in integrated urban development, engineering and strategic consulting.</p></div>
      </section>
      <section className="section">
        <SectionHeader eyebrow="Core values" title="The principles behind our work" />
        <div className="value-grid">{values.map((value) => <div className="value-item" key={value}>{value}</div>)}</div>
      </section>
      <section className="section dark-band">
        <SectionHeader eyebrow="Our approach" title="Sustainable, innovative and multidisciplinary" text="We combine field knowledge, design intelligence, geospatial tools, environmental responsibility and disciplined project controls." />
        <div className="pill-grid">{["Sustainability commitment", "Innovation and technology", "Multidisciplinary team", "Public sector", "Private development", "Urban infrastructure"].map((item) => <span key={item}>{item}</span>)}</div>
      </section>
      <section className="cta-band"><h2>Bring ACUIM into your next project conversation.</h2><Link className="button" to="/contact">Contact Our Team</Link></section>
    </>
  );
}
