import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { squadMetrics } from "../data/metrics";
import ShareButtons from "../components/ShareButtons";
import Ad from "../components/Ad";

export default function MetricDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const metric = squadMetrics.find((m) => m.slug === slug);
  if (!metric) return <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}><Helmet><meta name="robots" content="noindex,nofollow" /><title>404 - Not Found | Squad Audit</title></Helmet><h1 style={{ fontSize: 48, fontWeight: 800 }}>404</h1><p>Page not found</p><Link to="/" style={{ textDecoration: 'none', fontWeight: 600 }}>Go Home</Link></div>;

  const url = `https://squad.csskey.com/metrics/${metric.slug}`;
  const related = squadMetrics.filter((m) => m.slug !== metric.slug);
  const index = squadMetrics.findIndex((m) => m.slug === metric.slug);

  let isFirstParagraph = true;

  return (
    <div className="fade-in" style={{ maxWidth: 680, margin: "0 auto" }}>
      <Helmet>
        <title>{metric.name} - Squad Health Metric Guide | Squad Audit</title>
        <meta name="description" content={`${metric.name}: ${metric.shortDescription}`} />
        <meta property="og:title" content={`${metric.name} —Squad Health Metric`} />
        <meta property="og:description" content={metric.shortDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${metric.name} —Squad Health Metric`,
            description: metric.shortDescription,
            url,
            author: { "@type": "Person", name: "Marcus Chen" },
            publisher: { "@type": "Organization", name: "Squad Audit" },
            datePublished: "2026-07-01",
            articleSection: "Health Metrics",
            keywords: `${metric.name}, squad health, friend group metric, squad audit`,
            mainEntityOfPage: url,
          })}
        </script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://squad.csskey.com/" },
            { "@type": "ListItem", position: 2, name: "Metrics", item: "https://squad.csskey.com/metrics" },
            { "@type": "ListItem", position: 3, name: metric.name, item: url }
          ]
        })}</script>
      </Helmet>

      <div style={{ marginBottom: 24 }}>
        <Link to="/metrics" style={{ color: "var(--text-faint)", fontSize: 12, fontFamily: "var(--font-mono)" }}>→All Metrics</Link>
      </div>

      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <div style={{ width: 72, height: 72, borderRadius: 16, background: `${metric.color}15`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "2.25rem", marginBottom: 16 }}>
          {metric.icon}
        </div>
        <div className="eyebrow" $$$ >$$$</div>
        <h1 className="gradient-text" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 700, marginBottom: 12 }}>{metric.name}</h1>
        <p style={{ fontSize: 16, color: "var(--text-soft)", lineHeight: 1.7, maxWidth: 560, margin: "0 auto", fontFamily: "var(--font-body)" }}>{metric.shortDescription}</p>
      </div>

      {/* Description with dropcap */}
      <div className="audit-card" style={{ padding: "28px 32px", marginBottom: 24 }}>
        <div className="eyebrow" $$$ >$$$</div>
        <article className="prose">
          {metric.fullDescription.split("\n").map((line, i) => {
            if (line.startsWith("## ")) {
              isFirstParagraph = false;
              return <h2 key={i} style={{ fontSize: "1.5rem", margin: "1.8em 0 0.6em", fontWeight: 700, color: "var(--text)", fontFamily: "var(--font-heading)" }}>{line.replace("## ", "")}</h2>;
            }
            if (line.startsWith("### ")) {
              isFirstParagraph = false;
              return <h3 key={i} style={{ fontSize: "1.2rem", margin: "1.6em 0 0.5em", fontWeight: 600, color: "var(--text)", fontFamily: "var(--font-heading)" }}>{line.replace("### ", "")}</h3>;
            }
            if (line.trim() === "") {
              isFirstParagraph = false;
              return <div key={i} style={{ height: 16 }} />;
            }
            const dropcapClass = isFirstParagraph ? "dropcap" : "";
            isFirstParagraph = false;
            return (
              <p key={i} className={dropcapClass} style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text)", margin: "8px 0", fontFamily: "var(--font-body)", textAlign: "justify", hyphens: "auto" }}>
                {line}
              </p>
            );
          })}
        </article>
      </div>

      {/* Score bar */}
      <div className="audit-card" style={{ padding: "24px 32px", marginBottom: 24 }}>
        <div className="eyebrow" $$$ >$$$</div>
        <div className="metric-bar" style={{ height: 8 }}>
          <div className="metric-bar-fill" style={{ width: "50%", background: metric.color }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
          <span style={{ fontSize: 11, color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>Low</span>
          <span style={{ fontSize: 11, color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>High</span>
        </div>
      </div>

      {/* How to improve */}
      <div className="audit-card" style={{ padding: "28px 32px", marginBottom: 24 }}>
        <div className="eyebrow" $$$ >$$$</div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {metric.howToImprove.map((tip, i) => (
            <li key={i} style={{ fontSize: 15, color: "var(--text)", padding: "10px 0", borderBottom: i < metric.howToImprove.length - 1 ? "1px solid var(--border)" : "none", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
              <span style={{ color: metric.color, marginRight: 12, fontWeight: 700 }}>■</span>{tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Signs of health & problems */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }} className="metric-signs-grid">
        <div className="audit-card" style={{ padding: "24px 28px" }}>
          <div className="eyebrow" $$$ >$$$</div>
          {metric.signsOfHealth.map((s, i) => (
            <div key={i} style={{ fontSize: 14, color: "var(--text)", padding: "6px 0", fontFamily: "var(--font-body)", lineHeight: 1.55 }}>
              <span style={{ color: "var(--success)", marginRight: 8, fontWeight: 700 }}>+</span>{s}
            </div>
          ))}
        </div>
        <div className="audit-card" style={{ padding: "24px 28px" }}>
          <div className="eyebrow" $$$ >$$$</div>
          {metric.signsOfProblems.map((w, i) => (
            <div key={i} style={{ fontSize: 14, color: "var(--text)", padding: "6px 0", fontFamily: "var(--font-body)", lineHeight: 1.55 }}>
              <span style={{ color: "var(--danger)", marginRight: 8, fontWeight: 700 }}>−</span>{w}
            </div>
          ))}
        </div>
      </div>

      <Ad />

      {/* Related metrics */}
      {related.length > 0 && (
        <section style={{ marginBottom: 32 }}>
          <div className="eyebrow" $$$ >$$$</div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {related.map((m) => (
              <Link key={m.slug} to={`/metrics/${m.slug}`} style={{ textDecoration: "none" }}>
                <div className="audit-card" style={{ padding: "12px 20px", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: "1.25rem" }}>{m.icon}</span>
                  <span style={{ fontSize: 14, color: "var(--text)", fontFamily: "var(--font-body)", fontWeight: 600 }}>{m.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div style={{ marginTop: 32, marginBottom: 40 }}>
        <ShareButtons url={url} title={`${metric.name} —Squad Health Metric`} />
      </div>

      <style>{`
        @media (max-width: 640px) {
          .metric-signs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
