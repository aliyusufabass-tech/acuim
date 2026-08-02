import { useState } from "react";
import { InsightCard } from "../components/Cards";
import SectionHeader from "../components/SectionHeader";
import { insights as fallbackInsights } from "../data/content";
import { useApi } from "../hooks/useApi";

const categories = ["All", "Engineering", "Urban Development", "Architecture", "Sustainable Cities", "Infrastructure", "Environment", "Technology", "Company News"];

export default function Insights() {
  const [filter, setFilter] = useState("All");
  const { data } = useApi("/insights/", fallbackInsights);
  const allInsights = data?.length ? data : fallbackInsights;
  const visible = filter === "All" ? allInsights : allInsights.filter((insight) => insight.category === filter);
  return (
    <>
      <section className="page-hero"><span className="eyebrow">Insights</span><h1>Ideas and perspectives for sustainable development.</h1></section>
      <section className="section">
        <SectionHeader title="Latest articles" text="Research, viewpoints and company updates from ACUIM Development." />
        <div className="filters">{categories.map((item) => <button className={filter === item ? "active" : ""} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div>
        <div className="card-grid three">{visible.map((insight) => <InsightCard key={insight.slug} insight={insight} />)}</div>
      </section>
    </>
  );
}
