import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { squadMetrics } from "../data/metrics";
import Ad from "../components/Ad";

export default function MetricsPage() {
  return (
    <div className="fade-in">
      <Helmet>
        <title>Squad Health Metrics - 5 Indicators of Group Health | Squad Audit</title>
        <meta name="description" content="The 5 squad health metrics: Reliability, Fun Factor, Drama Level, Loyalty, and Cohesion. Learn what each metric measures and how to improve it." />
      </Helmet>
      <div className="eyebrow" style={{ marginBottom: 8 }}>Health Metrics</div>
      <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 700, marginBottom: 16 }}>Squad Health Metrics</h1>
      <p style={{ color: "var(--text-soft)", fontSize: 16, lineHeight: 1.7, maxWidth: 640, marginBottom: 40, fontFamily: "var(--font-body)" }}>
        Every friend group can be scored on 5 health metrics. Together, they provide a comprehensive picture of group dynamics. Learn what each metric means, what a healthy score looks like, and how to improve it.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
        {squadMetrics.map((m, i) => (
          <Link key={m.slug} to={`/metrics/${m.slug}`} style={{ textDecoration: "none" }}>
            <div className="audit-card" style={{ padding: "28px 32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${m.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0 }}>{m.icon}</div>
                <div>
                  <div style={{ fontSize: 11, color: "var(--text-faint)", letterSpacing: "0.1em", fontFamily: "var(--font-mono)" }}>METRIC {String(i + 1).padStart(2, "0")}</div>
                  <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.375rem", fontWeight: 700, color: m.color }}>{m.name}</h2>
                </div>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--text)", fontFamily: "var(--font-body)", textAlign: "justify" }}>{m.shortDescription}</p>
              <div style={{ marginTop: 16 }}>
                <div className="metric-bar" style={{ height: 6 }}>
                  <div className="metric-bar-fill" style={{ width: "50%", background: m.color }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
                  <span style={{ fontSize: 11, color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>Low</span>
                  <span style={{ fontSize: 11, color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>High</span>
                </div>
              </div>
              <div style={{ fontSize: 11, color: "var(--primary)", marginTop: 14, fontFamily: "var(--font-mono)" }}>READ FULL METRIC GUIDE →</div>
            </div>
          </Link>
        ))}
      </div>

      <Ad />
    </div>
  );
}
