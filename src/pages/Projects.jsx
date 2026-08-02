import { useState } from "react";
import { ProjectCard } from "../components/Cards";
import SectionHeader from "../components/SectionHeader";
import { projects as fallbackProjects } from "../data/content";
import { useApi } from "../hooks/useApi";

const categories = ["All", "Engineering", "Architecture", "Infrastructure", "Construction", "Urban Planning", "Landscape", "Public Realm", "Environmental", "Geospatial", "Technology"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const { data } = useApi("/projects/", fallbackProjects);
  const allProjects = data?.length ? data : fallbackProjects;
  const visible = filter === "All" ? allProjects : allProjects.filter((project) => project.category === filter);
  return (
    <>
      <section className="page-hero"><span className="eyebrow">Projects</span><h1>Portfolio work across infrastructure, cities, environment and technology.</h1></section>
      <section className="section">
        <SectionHeader title="Project portfolio" text="Filter representative project work by category." />
        <div className="filters">{categories.map((item) => <button className={filter === item ? "active" : ""} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div>
        <div className="card-grid three">{visible.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </section>
    </>
  );
}
