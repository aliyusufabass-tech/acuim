import { useState } from "react";
import { ServiceCard } from "../components/Cards";
import SectionHeader from "../components/SectionHeader";
import { serviceCategories, services as fallbackServices } from "../data/content";
import { useApi } from "../hooks/useApi";

export default function Services() {
  const [filter, setFilter] = useState("All");
  const { data } = useApi("/services/", fallbackServices);
  const allServices = data?.length ? data : fallbackServices;
  const visible = filter === "All" ? allServices : allServices.filter((service) => service.category === filter || service.title.includes(filter));

  return (
    <>
      <section className="page-hero"><span className="eyebrow">Services</span><h1>Engineering, planning, technology and advisory services for sustainable development.</h1></section>
      <section className="section">
        <SectionHeader title="Professional services" text="Explore the capabilities ACUIM brings to infrastructure, cities, built environments and secure digital systems." />
        <div className="filters">{serviceCategories.map((item) => <button className={filter === item ? "active" : ""} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div>
        <div className="card-grid">{visible.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}</div>
      </section>
      <section className="section dark-band"><SectionHeader eyebrow="Integrated expertise" title="One coordinated team across strategy, design and delivery." text="Our service model reduces silos across technical studies, planning, construction, environment and technology." /></section>
    </>
  );
}
