import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useEffect, useState } from 'react'
import { squadRoles } from './data/squadRoles'
import Home from './pages/Home'
import RolesPage from './pages/RolesPage'
import RoleDetailPage from './pages/RoleDetailPage'
import MetricsPage from './pages/MetricsPage'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'
import StaticPage from './pages/StaticPage'
import ResultPage from './pages/ResultPage'
import Ad from './components/Ad'

function NotFound() {
  return (
    <div style={{ minHeight: '55vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20, textAlign: 'center' }}>
      <Helmet><meta name="robots" content="noindex,nofollow" /><title>404 - Page Not Found | Squad Audit</title></Helmet>
      <div className="eyebrow">Error 404</div>
      <h1 className="gradient-text" style={{ fontSize: 'clamp(4rem,12vw,8rem)', fontWeight: 700, fontFamily: 'var(--font-heading)', lineHeight: 0.9 }}>404</h1>
      <p style={{ color: 'var(--text-soft)', maxWidth: 360, fontSize: 15, lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>This page could not be found in the audit records.</p>
      <Link to="/" className="btn btn-primary">Return Home</Link>
    </div>
  )
}

const navLinks = [
  { to: '/roles', label: 'Roles' },
  { to: '/metrics', label: 'Metrics' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
]

function Layout({ children }: { children: React.ReactNode }) {
  const loc = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => { window.scrollTo(0, 0) }, [loc.pathname])
  useEffect(() => { setMenuOpen(false) }, [loc.pathname])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'var(--bg-glass)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', height: 64, padding: '0 24px', gap: 24 }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--primary)' }}>SQUAD AUDIT</span>
          </Link>
          <nav style={{ display: 'flex', gap: 4, alignItems: 'center', marginLeft: 'auto' }} className="nav-desktop">
            {navLinks.map(l => (
              <Link key={l.to} to={l.to} className="nav-link" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 13, fontWeight: 600, padding: '6px 12px', borderRadius: 6, transition: 'color 0.15s ease', fontFamily: 'var(--font-body)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--primary)' }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-soft)' }}>{l.label}</Link>
            ))}
          </nav>
          <Link to="/" className="btn btn-primary nav-desktop" style={{ padding: '8px 20px', fontSize: 12 }}>Audit</Link>
          <button onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu" style={{ display: 'none', background: 'var(--bg-elevated)', border: '1px solid var(--border)', padding: 8, cursor: 'pointer', color: 'var(--text)', borderRadius: 8, marginLeft: 'auto' }} className="menu-toggle">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">{menuOpen ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="8" x2="21" y2="8"/><line x1="3" y1="16" x2="21" y2="16"/></>}</svg>
          </button>
        </div>
        {menuOpen && (
          <nav className="slide-down nav-mobile" style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid var(--border)', padding: '12px 24px', gap: 2, background: 'var(--bg-elevated)' }}>
            {navLinks.map(l => (<Link key={l.to} to={l.to} style={{ color: 'var(--text)', textDecoration: 'none', fontSize: 15, fontWeight: 600, padding: '12px 0', borderBottom: '1px solid var(--border)', fontFamily: 'var(--font-body)' }}>{l.label}</Link>))}
            <Link to="/" className="btn btn-primary" style={{ marginTop: 12, padding: '12px 24px' }}>Audit Your Squad</Link>
          </nav>
        )}
      </header>
      <main style={{ flex: 1, maxWidth: 1200, margin: '0 auto', padding: '40px 24px', width: '100%' }}>{children}</main>
      <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-elevated)', padding: '56px 24px 32px', marginTop: 64 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 40 }}>
            <div style={{ maxWidth: 320 }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--primary)' }}>SQUAD AUDIT</span>
              <p style={{ fontSize: 14, color: 'var(--text-soft)', lineHeight: 1.7, marginTop: 12, maxWidth: 280, fontFamily: 'var(--font-body)' }}>{squadRoles.length} squad roles, 5 health metrics, and a 12-question quiz. Audit your friend group dynamics. Free, no sign-up.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span className="section-label" style={{ marginBottom: 4 }}>Explore</span>
              <Link to="/roles" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--font-body)' }}>Squad Roles</Link>
              <Link to="/metrics" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--font-body)' }}>Health Metrics</Link>
              <Link to="/blog" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--font-body)' }}>Blog</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span className="section-label" style={{ marginBottom: 4 }}>Learn</span>
              <Link to="/blog/anatomy-of-perfect-friend-group" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--font-body)' }}>Anatomy of a Friend Group</Link>
              <Link to="/blog/8-squad-roles-every-group-needs" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--font-body)' }}>8 Squad Roles</Link>
              <Link to="/blog/how-to-audit-your-friend-group" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--font-body)' }}>How to Audit</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span className="section-label" style={{ marginBottom: 4 }}>Site</span>
              <Link to="/about" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--font-body)' }}>About</Link>
              <Link to="/privacy" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--font-body)' }}>Privacy</Link>
              <Link to="/terms" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--font-body)' }}>Terms</Link>
              <Link to="/contact" style={{ color: 'var(--text-soft)', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--font-body)' }}>Contact</Link>
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', marginBottom: 24 }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <span style={{ color: 'var(--text-faint)', fontSize: 12, letterSpacing: '0.04em', fontFamily: 'var(--font-mono)' }}>SQUAD AUDIT · 2026 · For entertainment purposes only.</span>
            <span style={{ color: 'var(--text-faint)', fontSize: 12, fontFamily: 'var(--font-mono)' }}>squad.csskey.com</span>
          </div>
        </div>
      </footer>
      <style>{`@media (max-width: 860px) { .nav-desktop { display: none !important; } .menu-toggle { display: flex !important; } }`}</style>
    </div>
  )
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roles" element={<RolesPage />} />
        <Route path="/roles/:slug" element={<RoleDetailPage />} />
        <Route path="/metrics" element={<MetricsPage />} />
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
  )
}
