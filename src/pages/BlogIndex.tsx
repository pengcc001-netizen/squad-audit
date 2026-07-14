import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blog";
import Ad from "../components/Ad";

export default function BlogIndex() {
  return (
    <div className="fade-in">
      <Helmet>
        <title>Squad Dynamics Blog - Friend Group Guides | Squad Audit</title>
        <meta name="description" content={`Learn about friend group dynamics, squad roles, and group health. ${blogPosts.length} articles.`} />
      </Helmet>
      <div className="eyebrow" style={{ marginBottom: 8 }}>Blog</div>
      <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 700, marginBottom: 16 }}>Squad Dynamics</h1>
      <p style={{ color: "var(--text-soft)", fontSize: 16, lineHeight: 1.7, maxWidth: 640, marginBottom: 40, fontFamily: "var(--font-body)" }}>
        Deep dives into friend group psychology, squad roles, group health metrics, and how to audit your own friend group.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
        {blogPosts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
            <article className="audit-card" style={{ padding: "28px 32px" }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                <span className="chip chip-primary">{post.category}</span>
                <span style={{ fontSize: 11, color: "var(--text-faint)", letterSpacing: "0.1em", alignSelf: "center", fontFamily: "var(--font-mono)" }}>{post.date}</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.375rem", fontWeight: 700, color: "var(--text)", marginBottom: 8, lineHeight: 1.3 }}>{post.title}</h2>
              <p style={{ fontSize: 14, color: "var(--text-soft)", lineHeight: 1.7, fontFamily: "var(--font-body)" }}>{post.excerpt}</p>
              <div style={{ fontSize: 11, color: "var(--primary)", marginTop: 12, fontFamily: "var(--font-mono)" }}>READ MORE →</div>
            </article>
          </Link>
        ))}
      </div>

      <Ad />
    </div>
  );
}
