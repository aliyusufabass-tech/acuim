import { useParams } from "react-router-dom";
import { imageUrl } from "../components/Cards";
import { insights as fallbackInsights } from "../data/content";
import { useApi } from "../hooks/useApi";

export default function InsightDetail() {
  const { slug } = useParams();
  const fallback = fallbackInsights.find((item) => item.slug === slug) || fallbackInsights[0];
  const { data } = useApi(`/insights/${slug}/`, fallback);
  const insight = data || fallback;
  return (
    <>
      <section className="detail-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(10,10,10,.74), rgba(10,10,10,.25)), url(${imageUrl(insight.featured_image)})` }}>
        <span className="eyebrow">{insight.category}</span><h1>{insight.title}</h1><p>{insight.summary}</p>
      </section>
      <article className="section article">
        <p className="meta">By {insight.author} - {new Date(insight.published_at).toLocaleDateString()}</p>
        {(insight.content || "").split("\n").map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </article>
    </>
  );
}
