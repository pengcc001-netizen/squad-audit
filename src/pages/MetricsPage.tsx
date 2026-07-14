import { Helmet } from "react-helmet-async";
import Ad from "../components/Ad";

interface MetricDef {
  key: string;
  name: string;
  color: string;
  icon: string;
  description: string;
}

const METRICS: MetricDef[] = [
  {
    key: "reliability",
    name: "Reliability",
    color: "#1E40AF",
    icon: "⚙",
    description: "Reliability measures how consistently squad members show up when they say they will. Do they arrive on time? Do they follow through on commitments? A high reliability score means the group can be counted on, which is the foundation of trust. Low reliability creates frustration, forces members to over-plan around flakes, and eventually erodes the sense that the squad is a real commitment rather than a loose option.",
  },
  {
    key: "funFactor",
    name: "Fun Factor",
    color: "#0D9488",
    icon: "🎉",
    description: "Fun Factor measures how much joy the group generates without it requiring labor. Are gatherings genuinely enjoyable, or does every good night require one person to spend three hours organizing it? High fun factor keeps people coming back and makes the squad self-sustaining. Low fun factor leads to boredom, declining attendance, and the slow drift where members start finding other groups more compelling.",
  },
  {
    key: "dramaLevel",
    name: "Drama Level",
    color: "#DC2626",
    icon: "⚠",
    description: "Drama Level measures the amount of unnecessary conflict in the group. Note: this is the only metric where lower is better. A small amount of low-grade friction is normal and even healthy, but high drama exhausts the group, consumes emotional bandwidth, and drives members away. The healthy range is narrow — below 10 means the group is probably avoiding real conversations, above 40 means the group spends more energy managing itself than enjoying itself.",
  },
  {
    key: "loyalty",
    name: "Loyalty",
    color: "#16A34A",
    icon: "🤝",
    description: "Loyalty measures whether members choose the squad when life expands. The test is simple: when someone gets a new partner, a new job, or moves to a new city, do they still make space for the original squad? High loyalty creates a sense of safety and permanence. Low loyalty makes the group feel conditional and fragile, and members begin to hedge their investment because they expect the group to eventually dissolve.",
  },
  {
    key: "cohesion",
    name: "Cohesion",
    color: "#EAB308",
    icon: "🔗",
    description: "Cohesion measures whether the group feels like a unit or just a collection of individuals who happen to know the same person. Does the group have a shared identity, inside jokes, and rituals? High cohesion means the group is more than the sum of its parts and can survive a member leaving. Low cohesion is the hub-and-spoke model — everyone is friends with one central person but not really with each other, and the group collapses the moment the hub leaves.",
  },
];

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
        {METRICS.map((m, i) => (
          <div key={m.key} className="audit-card" style={{ padding: "28px 32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: `${m.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0 }}>{m.icon}</div>
              <div>
                <div style={{ fontSize: 11, color: "var(--text-faint)", letterSpacing: "0.1em", fontFamily: "var(--font-mono)" }}>METRIC {String(i + 1).padStart(2, "0")}</div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.375rem", fontWeight: 700, color: m.color }}>{m.name}</h2>
              </div>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--text)", fontFamily: "var(--font-body)", textAlign: "justify" }}>{m.description}</p>
            <div style={{ marginTop: 16 }}>
              <div className="metric-bar" style={{ height: 6 }}>
                <div className="metric-bar-fill" style={{ width: "50%", background: m.color }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
                <span style={{ fontSize: 11, color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>Low</span>
                <span style={{ fontSize: 11, color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>High</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Ad />
    </div>
  );
}
