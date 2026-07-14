import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { quizQuestions } from '../data/questions'
import { squadRoles } from '../data/squadRoles'
import Ad from '../components/Ad'
import ShareButtons from '../components/ShareButtons'

const METRIC_KEYS = ['reliability', 'funFactor', 'dramaLevel', 'loyalty', 'cohesion'] as const
const metricLabels: Record<string, string> = { reliability: 'Reliability', funFactor: 'Fun Factor', dramaLevel: 'Drama Level', loyalty: 'Loyalty', cohesion: 'Cohesion' }
const metricColors: Record<string, string> = { reliability: '#1E40AF', funFactor: '#0D9488', dramaLevel: '#DC2626', loyalty: '#16A34A', cohesion: '#EAB308' }

function getRole(answers: number[]): typeof squadRoles[0] {
  const counts: Record<string, number> = {}
  answers.forEach((optIdx, i) => { const role = quizQuestions[i].options[optIdx].role; counts[role] = (counts[role] || 0) + 1 })
  const topRole = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'the-anchor'
  return squadRoles.find(r => r.slug === topRole) || squadRoles[0]
}

export default function ResultPage() {
  const { code } = useParams<{ code: string }>()
  const [decoded, setDecoded] = useState<number[] | null>(null)

  useEffect(() => {
    try {
      const parsed = JSON.parse(atob(code || ''))
      if (Array.isArray(parsed) && parsed.length === quizQuestions.length) setDecoded(parsed)
    } catch { setDecoded(null) }
  }, [code])

  if (!decoded) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 0' }}>
        <Helmet><meta name="robots" content="noindex,nofollow" /></Helmet>
        <p style={{ color: 'var(--text-soft)', fontFamily: 'var(--font-mono)' }}>Invalid audit link.</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: 16 }}>Take the Quiz</Link>
      </div>
    )
  }

  const role = getRole(decoded)
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://squad.csskey.com'

  return (
    <div className="fade-in" style={{ maxWidth: 680, margin: '0 auto' }}>
      <Helmet><title>{role.name} - Squad Audit Report | Squad Audit</title><meta name="robots" content="noindex,nofollow" /></Helmet>
      <div className="audit-card" style={{ padding: '40px 32px', marginBottom: 32 }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '0.3em', color: 'var(--primary)', marginBottom: 8 }}>SHARED AUDIT REPORT</div>
          <div style={{ width: 60, height: 2, background: 'var(--primary)', margin: '0 auto 24px', opacity: 0.3 }} />
        </div>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: '4rem', marginBottom: 16 }}>{role.emoji}</div>
          <h1 className="gradient-text" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 700, marginBottom: 8 }}>{role.name}</h1>
          <p style={{ fontSize: 16, color: 'var(--primary)', fontStyle: 'italic', fontFamily: 'var(--font-body)' }}>"{role.tagline}"</p>
        </div>
        <div style={{ marginBottom: 24, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Health Metrics</div>
          {METRIC_KEYS.map(key => (
            <div key={key} style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span className="mono" style={{ fontSize: 13, color: 'var(--text-soft)' }}>{metricLabels[key]}</span>
                <span className="mono" style={{ fontSize: 13, color: metricColors[key], fontWeight: 700 }}>{role.auditScore[key]}/100</span>
              </div>
              <div className="metric-bar">
                <div className="metric-bar-fill" style={{ width: `${role.auditScore[key]}%`, background: metricColors[key] }} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginBottom: 24, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Role Analysis</div>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text)', fontFamily: 'var(--font-body)', textAlign: 'justify' }}>{role.description}</p>
        </div>
        <div style={{ paddingTop: 24, borderTop: '1px solid var(--border)' }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Responsibilities</div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {role.responsibilities.map((r, i) => <li key={i} style={{ fontSize: 14, color: 'var(--text)', padding: '4px 0', fontFamily: 'var(--font-body)' }}><span style={{ color: 'var(--secondary)', marginRight: 8 }}>▸</span>{r}</li>)}
          </ul>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginBottom: 32 }}><ShareButtons url={shareUrl} title={`My squad role is ${role.name}! Audit your squad:`} /></div>
      <Ad />
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <Link to="/" className="btn btn-primary">Audit Your Own Squad →</Link>
      </div>
    </div>
  )
}
