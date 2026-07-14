import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { squadRoles } from "../data/squadRoles";
import Ad from "../components/Ad";

export default function RolesPage() {
  return (
    <div className="fade-in">
      <Helmet>
        <title>All Squad Roles - {squadRoles.length} Friend Group Roles | Squad Audit</title>
        <meta name="description" content={`Browse all ${squadRoles.length} squad roles — from The Planner to The Anchor. Each with responsibilities, strengths, weaknesses, and health metrics.`} />
      </Helmet>
      <div className="eyebrow" style={{ marginBottom: 8 }}>Squad Roles</div>
      <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 700, marginBottom: 16 }}>All Squad Roles</h1>
      <p style={{ color: "var(--text-soft)", fontSize: 16, lineHeight: 1.7, maxWidth: 640, marginBottom: 40, fontFamily: "var(--font-body)" }}>
        {squadRoles.length} distinct roles that appear in every friend group. Each role has unique responsibilities, strengths, weaknesses, and health metrics. Which one are you?
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16, marginBottom: 40 }}>
        {squadRoles.map((r) => (
          <Link key={r.slug} to={`/roles/${r.slug}`} style={{ textDecoration: "none" }}>
            <div className="audit-card" style={{ padding: "28px 24px", height: "100%" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: 8 }}>{r.emoji}</div>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>{r.name}</h2>
              <p style={{ fontSize: 13, color: "var(--primary)", fontStyle: "italic", marginBottom: 12, fontFamily: "var(--font-body)" }}>{r.tagline}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {r.strengths.slice(0, 3).map((s, i) => (
                  <span key={i} className="chip chip-primary" style={{ fontSize: 11 }}>{s}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Ad />
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <Link to="/" className="btn btn-primary">Audit Your Squad →</Link>
      </div>
    </div>
  );
}
