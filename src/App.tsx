import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { squadRoles } from "./data/squadRoles";
import Home from "./pages/Home";
import RolesPage from "./pages/RolesPage";
import RoleDetailPage from "./pages/RoleDetailPage";
import MetricsPage from "./pages/MetricsPage";
import MetricDetailPage from "./pages/MetricDetailPage";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import StaticPage from "./pages/StaticPage";
import ResultPage from "./pages/ResultPage";
import Ad from "./components/Ad";
import CookieConsent from './components/CookieConsent'

function NotFound() {
  return (
    <div style={{ minHeight: "55vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20, textAlign: "center" }}>
      <Helmet>
        <meta name="robots" content="noindex,nofollow" />
        <title>404 - Page Not Found | Squad Audit</title>
      </Helmet>
      <div className="eyebrow">Error · Audit Not Found</div>
      <h1 className="gradient-text" style={{ fontSize: "clamp(4rem,12vw,8rem)", fontWeight: 700, fontFamily: "var(--font-heading)", lineHeight: 0.9, letterSpacing: "-0.03em", fontVariantNumeric: "tabular-nums" }}>
        404
      </h1>
      <p style={{ color: "var(--text-soft)", maxWidth: 380, fontSize: 15, lineHeight: 1.7, fontFamily: "var(--font-mono)" }}>
        AUDIT STATUS: NOT FOUND. This page does not exist in the squad records.
      </p>
      <Link to="/" className="btn btn-primary">Return to Audit</Link>
    </div>
  );
}

const navLinks = [
  { to: "/roles", label: "Roles" },
  { to: "/metrics", label: "Metrics" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
];

function Layout({ children }: { children: React.ReactNode }) {
  const loc = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loc.pathname]);
  useEffect(() => {
    setMenuOpen(false);
  }, [loc.pathname]);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* ---------- Header ---------- */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(248, 250, 252, 0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", height: 64, padding: "0 24px", gap: 24 }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden="true">
              <rect width="64" height="64" rx="12" fill="#0F172A" />
              <circle cx="22" cy="24" r="6" fill="#1E40AF" />
              <circle cx="42" cy="24" r="6" fill="#0D9488" />
              <circle cx="32" cy="42" r="6" fill="#1E40AF" />
              <line x1="22" y1="24" x2="42" y2="24" stroke="#E2E8F0" strokeWidth="2" />
              <line x1="22" y1="24" x2="32" y2="42" stroke="#E2E8F0" strokeWidth="2" />
              <line x1="42" y1="24" x2="32" y2="42" stroke="#E2E8F0" strokeWidth="2" />
            </svg>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)" }}>
              SQUAD<span style={{ color: "var(--primary)" }}> AUDIT</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", gap: 4, alignItems: "center", marginLeft: "auto" }} className="nav-desktop">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="nav-link"
                style={{
                  color: "var(--text-soft)",
                  textDecoration: "none",
                  fontSize: 13,
                  fontWeight: 600,
                  padding: "6px 12px",
                  borderRadius: 6,
                  transition: "color 0.15s ease",
                  fontFamily: "var(--font-body)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-soft)";
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link to="/" className="btn btn-primary nav-desktop" style={{ padding: "8px 20px", fontSize: 12 }}>
            Take the Audit
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              background: "var(--bg-elevated)",
              border: "1px solid var(--border)",
              padding: 8,
              cursor: "pointer",
              color: "var(--text)",
              borderRadius: 8,
              marginLeft: "auto",
            }}
            className="menu-toggle"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="8" x2="21" y2="8" />
                  <line x1="3" y1="16" x2="21" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav
            className="slide-down nav-mobile"
            style={{
              display: "flex",
              flexDirection: "column",
              borderBottom: "1px solid var(--border)",
              padding: "12px 24px",
              gap: 2,
              background: "var(--bg-elevated)",
            }}
          >
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                style={{
                  color: "var(--text)",
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 600,
                  padding: "12px 0",
                  borderBottom: "1px solid var(--border)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/" className="btn btn-primary" style={{ marginTop: 12, padding: "12px 24px" }}>
              Take the Audit
            </Link>
          </nav>
        )}
      </header>

      {/* ---------- Main ---------- */}
      <main style={{ flex: 1, maxWidth: 1200, margin: "0 auto", padding: "40px 24px", width: "100%" }}>{children}</main>

      {/* ---------- Footer ---------- */}
      <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg-elevated)", padding: "56px 24px 32px", marginTop: 64 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, marginBottom: 40 }}>
            {/* Brand */}
            <div style={{ maxWidth: 320 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <svg width="24" height="24" viewBox="0 0 64 64" aria-hidden="true">
                  <rect width="64" height="64" rx="12" fill="#0F172A" />
                  <circle cx="22" cy="24" r="6" fill="#1E40AF" />
                  <circle cx="42" cy="24" r="6" fill="#0D9488" />
                  <circle cx="32" cy="42" r="6" fill="#1E40AF" />
                  <line x1="22" y1="24" x2="42" y2="24" stroke="#E2E8F0" strokeWidth="2" />
                  <line x1="22" y1="24" x2="32" y2="42" stroke="#E2E8F0" strokeWidth="2" />
                  <line x1="42" y1="24" x2="32" y2="42" stroke="#E2E8F0" strokeWidth="2" />
                </svg>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)" }}>
                  SQUAD AUDIT
                </span>
              </div>
              <p style={{ fontSize: 14, color: "var(--text-soft)", lineHeight: 1.7, maxWidth: 280, fontFamily: "var(--font-body)" }}>
                {squadRoles.length} squad roles analyzed across 5 health metrics. Audit your friend group, discover your role, and learn what makes squads thrive. Free, no sign-up.
              </p>
            </div>
            {/* Explore */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span className="section-label" style={{ marginBottom: 4 }}>Explore</span>
              <Link to="/roles" style={{ color: "var(--text-soft)", textDecoration: "none", fontSize: 14, fontFamily: "var(--font-body)" }}>Squad Roles</Link>
              <Link to="/metrics" style={{ color: "var(--text-soft)", textDecoration: "none", fontSize: 14, fontFamily: "var(--font-body)" }}>Health Metrics</Link>
              <Link to="/" style={{ color: "var(--text-soft)", textDecoration: "none", fontSize: 14, fontFamily: "var(--font-body)" }}>Take the Audit</Link>
            </div>
            {/* Learn */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span className="section-label" style={{ marginBottom: 4 }}>Learn</span>
              <Link to="/blog" style={{ color: "var(--text-soft)", textDecoration: "none", fontSize: 14, fontFamily: "var(--font-body)" }}>Blog</Link>
              <Link to="/blog/anatomy-of-a-perfect-friend-group" style={{ color: "var(--text-soft)", textDecoration: "none", fontSize: 14, fontFamily: "var(--font-body)" }}>Anatomy of a Squad</Link>
              <Link to="/blog/how-to-audit-your-friend-group" style={{ color: "var(--text-soft)", textDecoration: "none", fontSize: 14, fontFamily: "var(--font-body)" }}>How to Audit</Link>
            </div>
            {/* Site */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span className="section-label" style={{ marginBottom: 4 }}>Site</span>
              <Link to="/about" style={{ color: "var(--text-soft)", textDecoration: "none", fontSize: 14, fontFamily: "var(--font-body)" }}>About</Link>
              <Link to="/privacy" style={{ color: "var(--text-soft)", textDecoration: "none", fontSize: 14, fontFamily: "var(--font-body)" }}>Privacy</Link>
              <Link to="/terms" style={{ color: "var(--text-soft)", textDecoration: "none", fontSize: 14, fontFamily: "var(--font-body)" }}>Terms</Link>
              <Link to="/contact" style={{ color: "var(--text-soft)", textDecoration: "none", fontSize: 14, fontFamily: "var(--font-body)" }}>Contact</Link>
            </div>
          </div>
          <div style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid var(--border)" }}>
            <div style={{ fontWeight: 600, marginBottom: 10, fontSize: 12, letterSpacing: "0.04em", fontFamily: "var(--font-mono)", color: "var(--text-soft)" }}>NETWORK SITES</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 12px" }}>
              {[
                { name: "CSS Reference", url: "https://csskey.com", desc: "Complete CSS property, selector & function reference" },
                { name: "AI Tools", url: "https://ai.csskey.com", desc: "40+ free AI-powered online tools" },
                { name: "Free Online Tools", url: "https://tools.aiprh.com", desc: "160+ free utility tools and calculators" },
                { name: "JS Reference", url: "https://js.csskey.com", desc: "JavaScript API reference with examples" },
                { name: "Python Reference", url: "https://python.csskey.com", desc: "Python standard library reference" },
                { name: "HTML Reference", url: "https://html.csskey.com", desc: "HTML element and attribute reference" },
                { name: "SQL Reference", url: "https://sql.csskey.com", desc: "SQL syntax reference for multiple databases" },
                { name: "Linux Reference", url: "https://linux.csskey.com", desc: "Linux command reference and examples" },
                { name: "Emoji Kitchen", url: "https://emoji.csskey.com", desc: "Mix and create custom emoji combinations" },
                { name: "Font Fusion", url: "https://font.csskey.com", desc: "Google Fonts preview and pairing tool" },
                { name: "Prompt Vault", url: "https://prompt.csskey.com", desc: "Curated AI prompt library" },
                { name: "Quiz Hub", url: "https://quiz.csskey.com", desc: "Interactive quizzes on programming topics" },
                { name: "Curious Lens", url: "https://curious.csskey.com", desc: "Daily curious facts and trivia" },
                { name: "Would You Rather", url: "https://wyr.csskey.com", desc: "Fun would-you-rather questions game" },
                { name: "Spark Site", url: "https://spark.csskey.com", desc: "Creative writing prompts and ideas" },
                { name: "Vibes", url: "https://vibes.csskey.com", desc: "Mood and aesthetic content generator" },
                { name: "Words", url: "https://words.csskey.com", desc: "Word tools and language games" },
                { name: "Brand", url: "https://brand.csskey.com", desc: "Brand name and logo idea generator" },
                { name: "Calckit", url: "https://calc.csskey.com", desc: "Collection of free online calculators" },
                { name: "Mix", url: "https://mix.csskey.com", desc: "Content mixing and blending tools" },
                { name: "Aura Score", url: "https://aura.csskey.com", desc: "Personal energy and aura reading" },
                { name: "Rot Report", url: "https://rot.csskey.com", desc: "Daily rot and decay content" },
                { name: "Your Lore", url: "https://lore.csskey.com", desc: "Personal story and lore generator" },
                { name: "Draw Perfect", url: "https://draw.csskey.com", desc: "Drawing and sketching tools" },
                { name: "Personality Receipt", url: "https://receipt.csskey.com", desc: "Personality test and receipt generator" },
              ].map((s) => (
                <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" title={s.desc} style={{ color: "var(--text-soft)", textDecoration: "none", fontSize: 12, fontFamily: "var(--font-body)" }}>{s.name}</a>
              ))}
            </div>
          </div>
          <hr style={{ border: "none", borderTop: "1px solid var(--border)", marginBottom: 24 }} />
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <span style={{ color: "var(--text-faint)", fontSize: 12, letterSpacing: "0.04em", fontFamily: "var(--font-mono)" }}>
              SQUAD AUDIT · 2026 · For entertainment and reflection.
            </span>
            <span style={{ color: "var(--text-faint)", fontSize: 12, fontFamily: "var(--font-mono)" }}>squad.csskey.com</span>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .menu-toggle { display: flex !important; }
        }
      `}</style>
      <CookieConsent />
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roles" element={<RolesPage />} />
        <Route path="/roles/:slug" element={<RoleDetailPage />} />
        <Route path="/metrics" element={<MetricsPage />} />
        <Route path="/metrics/:slug" element={<MetricDetailPage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/about" element={<StaticPage page="about" />} />
        <Route path="/privacy" element={<StaticPage page="privacy" />} />
        <Route path="/terms" element={<StaticPage page="terms" />} />
        <Route path="/contact" element={<StaticPage page="contact" />} />
        <Route path="/r/:code" element={<ResultPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Ad />
    </Layout>
  );
}
