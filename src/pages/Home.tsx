import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate } from 'react-router-dom'
import { quizQuestions } from '../data/questions'
import { squadRoles } from '../data/squadRoles'
import Ad from '../components/Ad'

type Phase = 'intro' | 'quiz' | 'result'
const METRIC_KEYS = ['reliability', 'funFactor', 'dramaLevel', 'loyalty', 'cohesion'] as const

function getRole(answers: number[]): typeof squadRoles[0] {
  const counts: Record<string, number> = {}
  answers.forEach((optIdx, i) => { const role = quizQuestions[i].options[optIdx].role; counts[role] = (counts[role] || 0) + 1 })
  const topRole = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'the-anchor'
  return squadRoles.find(r => r.slug === topRole) || squadRoles[0]
}

export default function Home() {
  const [phase, setPhase] = useState<Phase>('intro')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const navigate = useNavigate()

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex]
    setAnswers(newAnswers)
    if (currentQ < quizQuestions.length - 1) { setCurrentQ(currentQ + 1) }
    else { const encoded = btoa(JSON.stringify(newAnswers)); window.history.replaceState(null, '', `/r/${encoded}`); setPhase('result') }
  }

  const resetQuiz = () => { setPhase('intro'); setCurrentQ(0); setAnswers([]); navigate('/') }

  if (phase === 'intro') {
    return (
      <div className="fade-in">
        <Helmet>
          <title>Squad Audit - Analyze Your Friend Group Dynamics [2026]</title>
          <meta name="description" content="Audit your squad. Take the quiz and get a detailed squad audit report with roles, health metrics, and group dynamics analysis. Free, no sign-up." />
          <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "WebApplication", "name": "Squad Audit", "url": "https://squad.csskey.com", "applicationCategory": "EntertainmentApplication", "operatingSystem": "Any", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }, "description": "Audit your squad. Get a detailed report with roles, health metrics, and group dynamics analysis." })}</script>
        </Helmet>
        <section style={{ textAlign: 'center', padding: '40px 0 60px' }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Squad Audit Report · 2026</div>
          <h1 className="gradient-text" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 700, fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 24 }}>Audit Your Squad</h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--text-soft)', maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>Answer 12 questions about your friend group dynamics and get a detailed audit report with your squad role, health metrics, and group dynamics analysis. {squadRoles.length} roles, 5 metrics.</p>
          <button onClick={() => setPhase('quiz')} className="btn btn-primary" style={{ padding: '16px 48px', fontSize: 14 }}>Start the Audit →</button>
          <div style={{ marginTop: 16 }}><span style={{ color: 'var(--text-faint)', fontSize: 12, fontFamily: 'var(--font-mono)' }}>12 questions · ~2 minutes · Free, no sign-up</span></div>
        </section>
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginBottom: 60 }}>
          {[{ label: 'Squad Roles', value: `${squadRoles.length}` }, { label: 'Health Metrics', value: '5' }, { label: 'Questions', value: '12' }, { label: 'Free', value: 'Yes' }].map((stat, i) => (
            <div key={i} className="audit-card" style={{ padding: '24px 20px', textAlign: 'center' }}>
              <div className="mono" style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 4 }}>{stat.value}</div>
              <div className="section-label" style={{ fontSize: 11 }}>{stat.label}</div>
            </div>
          ))}
        </section>
        <Ad />
        <section style={{ marginBottom: 60 }}>
          <div className="eyebrow" style={{ textAlign: 'center', marginBottom: 8 }}>How It Works</div>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontFamily: 'var(--font-heading)', marginBottom: 40 }}>Three Steps to Your Audit Report</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[{ num: '01', title: 'Answer 12 Questions', desc: 'Tell us about your friend group dynamics — how decisions get made, conflicts get handled, and Friday nights unfold.' }, { num: '02', title: 'Get Your Role', desc: 'Discover your squad role and see how your group scores on 5 health metrics: Reliability, Fun, Drama, Loyalty, and Cohesion.' }, { num: '03', title: 'Read the Report', desc: 'Get a full audit report with your role, responsibilities, strengths, weaknesses, and compatibility analysis.' }].map((step, i) => (
              <div key={i} className="audit-card" style={{ padding: '32px 28px' }}>
                <div className="mono" style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary)', opacity: 0.3, marginBottom: 8 }}>{step.num}</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: 12, color: 'var(--text)' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-soft)', fontSize: 15, lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
            <div><div className="eyebrow" style={{ marginBottom: 4 }}>Featured</div><h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>The Squad Roles</h2></div>
            <Link to="/roles" style={{ color: 'var(--primary)', fontSize: 14, fontFamily: 'var(--font-mono)', fontWeight: 600 }}>View All →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {squadRoles.slice(0, 4).map((r) => (
              <Link key={r.slug} to={`/roles/${r.slug}`} style={{ textDecoration: 'none' }}>
                <div className="audit-card" style={{ padding: '24px', height: '100%' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 8 }}>{r.emoji}</div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{r.name}</h3>
                  <p style={{ fontSize: 13, color: 'var(--primary)', fontStyle: 'italic', fontFamily: 'var(--font-body)' }}>"{r.tagline}"</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    )
  }

  if (phase === 'quiz') {
    const q = quizQuestions[currentQ]
    const progress = ((currentQ + 1) / quizQuestions.length) * 100
    return (
      <div className="fade-in" style={{ maxWidth: 720, margin: '0 auto' }}>
        <Helmet><title>Squad Quiz - Question {currentQ + 1} of {quizQuestions.length} | Squad Audit</title></Helmet>
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span className="mono" style={{ fontSize: 12, color: 'var(--text-soft)', letterSpacing: '0.1em' }}>QUESTION {currentQ + 1} / {quizQuestions.length}</span>
            <span className="mono" style={{ fontSize: 12, color: 'var(--primary)' }}>{Math.round(progress)}%</span>
          </div>
          <div style={{ height: 4, background: 'var(--border)', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, var(--primary), var(--secondary))', borderRadius: 2, transition: 'width 0.4s ease' }} />
          </div>
        </div>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, lineHeight: 1.3, marginBottom: 32, color: 'var(--text)' }}>{q.question}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {q.options.map((opt, i) => (
            <button key={i} onClick={() => handleAnswer(i)} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px 24px', textAlign: 'left', cursor: 'pointer', transition: 'all 0.2s ease', color: 'var(--text)', fontSize: 15, fontFamily: 'var(--font-body)', lineHeight: 1.5, boxShadow: 'var(--shadow-sm)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.background = 'var(--primary-soft)' }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg-elevated)' }}>
              <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-mono)', fontWeight: 600, marginRight: 12 }}>{String.fromCharCode(65 + i)}</span>{opt.text}
            </button>
          ))}
        </div>
        {currentQ > 0 && <div style={{ marginTop: 24, textAlign: 'center' }}><button onClick={() => { setCurrentQ(currentQ - 1); setAnswers(answers.slice(0, -1)) }} style={{ background: 'none', border: 'none', color: 'var(--text-faint)', cursor: 'pointer', fontSize: 13, fontFamily: 'var(--font-mono)' }}>← Previous question</button></div>}
      </div>
    )
  }

  if (phase === 'result') {
    const role = getRole(answers)
    const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://squad.csskey.com'
    const metricLabels: Record<string, string> = { reliability: 'Reliability', funFactor: 'Fun Factor', dramaLevel: 'Drama Level', loyalty: 'Loyalty', cohesion: 'Cohesion' }
    const metricColors: Record<string, string> = { reliability: '#1E40AF', funFactor: '#0D9488', dramaLevel: '#DC2626', loyalty: '#16A34A', cohesion: '#EAB308' }

    return (
      <div className="fade-in" style={{ maxWidth: 680, margin: '0 auto' }}>
        <Helmet><title>Your Squad Audit: {role.name} | Squad Audit</title><meta name="description" content={`My squad role is ${role.name}. Audit your squad!`} /><meta name="robots" content="noindex,nofollow" /></Helmet>
        <div className="audit-card" style={{ padding: '40px 32px', marginBottom: 32 }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '0.3em', color: 'var(--primary)', marginBottom: 8 }}>SQUAD AUDIT REPORT</div>
            <div style={{ width: 60, height: 2, background: 'var(--primary)', margin: '0 auto 24px', opacity: 0.3 }} />
          </div>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ fontSize: '4rem', marginBottom: 16 }}>{role.emoji}</div>
            <h1 className="gradient-text" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 700, marginBottom: 8 }}>{role.name}</h1>
            <p style={{ fontSize: 16, color: 'var(--primary)', fontStyle: 'italic', fontFamily: 'var(--font-body)' }}>"{role.tagline}"</p>
          </div>
          {/* Audit scores */}
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
          {/* Description */}
          <div style={{ marginBottom: 24, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Role Analysis</div>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text)', fontFamily: 'var(--font-body)', textAlign: 'justify' }}>{role.description}</p>
          </div>
          {/* Responsibilities */}
          <div style={{ marginBottom: 24, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Responsibilities</div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {role.responsibilities.map((r, i) => <li key={i} style={{ fontSize: 14, color: 'var(--text)', padding: '4px 0', fontFamily: 'var(--font-body)' }}><span style={{ color: 'var(--secondary)', marginRight: 8 }}>▸</span>{r}</li>)}
            </ul>
          </div>
          {/* Strengths & Weaknesses */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 8, color: 'var(--success)' }}>Strengths</div>
              {role.strengths.map((s, i) => <div key={i} style={{ fontSize: 13, color: 'var(--text)', padding: '2px 0', fontFamily: 'var(--font-body)' }}><span style={{ color: 'var(--success)', marginRight: 6 }}>+</span>{s}</div>)}
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 8, color: 'var(--danger)' }}>Weaknesses</div>
              {role.weaknesses.map((w, i) => <div key={i} style={{ fontSize: 13, color: 'var(--text)', padding: '2px 0', fontFamily: 'var(--font-body)' }}><span style={{ color: 'var(--danger)', marginRight: 6 }}>−</span>{w}</div>)}
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Share Your Audit Report</div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`My squad role is ${role.name}! Audit your squad:`)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener" className="btn btn-outline" style={{ fontSize: 12 }}>Share on X</a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener" className="btn btn-outline" style={{ fontSize: 12 }}>Share on Facebook</a>
            <button onClick={() => navigator.clipboard.writeText(shareUrl)} className="btn btn-outline" style={{ fontSize: 12 }}>Copy Link</button>
          </div>
        </div>
        <Ad />
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <button onClick={resetQuiz} className="btn btn-ghost" style={{ fontSize: 13 }}>← Retake the Audit</button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Explore More</div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/roles" className="btn btn-outline" style={{ fontSize: 12 }}>All Squad Roles</Link>
            <Link to="/metrics" className="btn btn-outline" style={{ fontSize: 12 }}>Health Metrics</Link>
            <Link to="/blog" className="btn btn-outline" style={{ fontSize: 12 }}>Read the Blog</Link>
          </div>
        </div>
      </div>
    )
  }
  return null
}
