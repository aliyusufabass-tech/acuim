import { useParams } from "react-router-dom";
import { imageUrl, ProjectCard } from "../components/Cards";
import { projects as fallbackProjects } from "../data/content";
import { useApi } from "../hooks/useApi";

export default function ProjectDetail() {
  const { slug } = useParams();
  const fallback = fallbackProjects.find((item) => item.slug === slug) || fallbackProjects[0];
  const { data } = useApi(`/projects/${slug}/`, fallback);
  const project = data || fallback;
  return (
    <>
      <section className="detail-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(10,10,10,.74), rgba(10,10,10,.25)), url(${imageUrl(project.featured_image)})` }}>
        <span className="eyebrow">{project.category}</span><h1>{project.title}</h1><p>{project.short_description}</p>
      </section>
      <section className="section project-facts">
        <span><strong>Location</strong>{project.location}</span><span><strong>Client</strong>{project.client || "Confidential"}</span><span><strong>Year</strong>{project.year || "Ongoing"}</span><span><strong>Category</strong>{project.category}</span>
      </section>
      <section className="section detail-grid">
        <div className="detail-panel wide"><h2>Project overview</h2><p>{project.full_description}</p></div>
        <div className="detail-panel"><h2>Client challenge</h2><p>{project.challenge}</p></div>
        <div className="detail-panel"><h2>ACUIM solution</h2><p>{project.solution}</p></div>
        <div className="detail-panel"><h2>Project outcome</h2><p>{project.outcome}</p></div>
      </section>
      <section className="section"><h2>Services provided</h2><div className="pill-grid">{(project.services_provided || []).map((item) => <span key={item}>{item}</span>)}</div></section>
      <section className="section"><h2>Image gallery</h2><div className="gallery">{(project.gallery?.length ? project.gallery : [{ image: project.featured_image, alt_text: project.title }]).map((image, index) => <img key={index} src={imageUrl(image.image)} alt={image.alt_text || project.title} loading="lazy" />)}</div></section>
      <section className="section"><h2>Related projects</h2><div className="card-grid three">{fallbackProjects.filter((item) => item.slug !== slug).slice(0, 3).map((item) => <ProjectCard key={item.slug} project={item} />)}</div></section>
    </>
  );
}
