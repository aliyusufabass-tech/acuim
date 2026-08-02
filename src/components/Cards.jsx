import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { fallbackImage, services as fallbackServices } from "../data/content";

const iconMap = Object.fromEntries(fallbackServices.map((service) => [service.title, service.Icon]));

export function imageUrl(src) {
  if (!src) return fallbackImage;
  if (String(src).startsWith("http")) return src;
  if (String(src).startsWith("/media/")) {
    const apiRoot = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api";
    return `${apiRoot.replace(/\/api\/?$/, "")}${src}`;
  }
  return String(src).startsWith("/") ? src : fallbackImage;
}

export function ServiceCard({ service, index }) {
  const Icon = service.Icon || iconMap[service.title] || fallbackServices[index % fallbackServices.length].Icon;
  return (
    <article className="feature-card service-card">
      <img src={imageUrl(service.card_image)} alt={`${service.title} service`} loading="lazy" />
      <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
      <Icon className="card-icon" size={28} />
      <h3>{service.title}</h3>
      <p>{service.short_description}</p>
      <Link to={`/services/${service.slug}`} className="text-link">
        Learn More <ArrowRight size={16} />
      </Link>
    </article>
  );
}

export function ProjectCard({ project }) {
  return (
    <article className="feature-card project-card">
      <img src={imageUrl(project.featured_image)} alt={project.title} loading="lazy" />
      <span className="tag">{project.category}</span>
      <h3>{project.title}</h3>
      <p className="meta"><MapPin size={15} /> {project.location}</p>
      <p>{project.short_description}</p>
      <Link to={`/projects/${project.slug}`} className="button small">View Project</Link>
    </article>
  );
}

export function InsightCard({ insight }) {
  return (
    <article className="feature-card insight-card">
      <img src={imageUrl(insight.featured_image)} alt={insight.title} loading="lazy" />
      <span className="tag">{insight.category}</span>
      <h3>{insight.title}</h3>
      <p>{insight.summary}</p>
      <p className="meta"><CalendarDays size={15} /> {new Date(insight.published_at).toLocaleDateString()}</p>
      <Link to={`/insights/${insight.slug}`} className="text-link">Read More <ArrowRight size={16} /></Link>
    </article>
  );
}


