import { Helmet } from 'react-helmet-async'
import Ad from '../components/Ad'

const METRICS = [
  { key: 'reliability', name: 'Reliability', color: '#1E40AF', icon: '✓', description: 'Reliability measures how consistently squad members show up when they say they will. Do they arrive on time? Do they follow through on commitments? A high reliability score means the group can be counted on. Low reliability creates frustration and eventually erodes trust.' },
  { key: 'funFactor', name: 'Fun Factor', color: '#0D9488', icon: '🎉', description: 'Fun Factor measures how much joy the group generates. Are gatherings genuinely enjoyable? Does the group create memorable experiences? High fun factor keeps people coming back. Low fun factor leads to boredom and eventually drift.' },
  { key: 'dramaLevel', name: 'Drama Level', color: '#DC2626', icon: '⚠', description: 'Drama Level measures the amount of unnecessary conflict in the group. Note: this is the only metric where LOWER is better. A small amount of drama is normal, but high drama exhausts the group and drives members away.' },
  { key: 'loyalty', name: 'Loyalty', color: '#16A34A', icon: '🤝', description: 'Loyalty measures how committed the group is to each other. Will members show up in hard times? Do they defend each other? High loyalty creates a sense of safety. Low loyalty makes the group feel conditional and fragile.' },
  { key: 'cohesion', name: 'Cohesion', color: '#EAB308', icon: '🔗', description: 'Cohesion measures whether the group feels like a unit or just a collection of individuals. Does the group have shared identity? Inside jokes? Rituals? High cohesion means the group is more than the sum of its parts.' },
]

export default function MetricsPage() {
  return (
    <div className="fade-in">
      <Helmet>
        <title>Squad Health Metrics - 5 Indicators of Group Health | Squad Audit</title>
        <meta name="description" content="The 5 squad health metrics: Reliability, Fun Factor, Drama Level, Loyalty, and Cohesion. Learn what each metric measures and how to improve it." />
      </Helmet>
      <div className="eyebrow" style={{ marginBottom: 8 }}>Health Metrics</div>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, marginBottom: 16 }}>Squad Health Metrics</h1>
      <p style={{ color: 'var(--text-soft)', fontSize: 16, lineHeight: 1.7, maxWidth: 640, marginBottom: 40, fontFamily: 'var(--font-body)' }}>
        Every friend group can be scored on 5 health metrics. Together, they provide a comprehensive picture of group dynamics. Learn what each metric means and how to improve it.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        {METRICS.map((m, i) => (
          <div key={m.key} className="audit-card" style={{ padding: '28px 32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: `${m.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>{m.icon}</div>
              <div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--text-faint)', letterSpacing: '0.1em' }}>METRIC {String(i + 1).padStart(2, '0')}</div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.375rem', fontWeight: 700, color: m.color }}>{m.name}</h2>
              </div>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text)', fontFamily: 'var(--font-body)', textAlign: 'justify' }}>{m.description}</p>
            <div style={{ marginTop: 16 }}>
              <div className="metric-bar" style={{ height: 6 }}>
                <div className="metric-bar-fill" style={{ width: '50%', background: m.color }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                <span className="mono" style={{ fontSize: 11, color: 'var(--text-faint)' }}>Low</span>
                <span className="mono" style={{ fontSize: 11, color: 'var(--text-faint)' }}>High</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Ad />
    </div>
  )
}
