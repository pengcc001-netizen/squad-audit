import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

interface PageDef {
  title: string;
  content: string;
}

const PAGES: Record<string, PageDef> = {
  about: {
    title: "About",
    content: `## About Squad Audit

I built this site because friend groups are the most important social structure in most people's lives, and nobody talks about how they work. We have frameworks for romantic relationships, for professional networks, for family dynamics. But friend groups? We just hope they work out.

My name is Marcus Chen. I have been studying social dynamics and group psychology for years. When I started analyzing my own friend groups using principles from organizational behavior, I was surprised by how well they applied. A friend group is, in many ways, a small organization. It has roles, it has metrics, it has health indicators. It just does not have a framework for understanding them.

### What You Will Find Here

- 8 squad roles with responsibilities, strengths, and weaknesses
- 5 health metrics for assessing group dynamics
- A 12-question quiz that generates an audit report
- A blog about friend group psychology and dynamics
- Free to use, no sign-up

### Why I Built This

Friend groups are invisible infrastructure. They support us through breakups, career changes, and life transitions. But we rarely invest in them intentionally. Squad Audit is a tool for making the invisible visible — for naming the roles, measuring the health, and starting conversations about group dynamics.

### Contact

Email: support@csskey.com`,
  },
  privacy: {
    title: "Privacy Policy",
    content: `## Privacy Policy

**Last updated: July 2026**

### Information We Collect

Squad Audit does not collect personal information. Your quiz answers are encoded in your browser and never sent to a server. We do not use accounts, logins, or tracking cookies.

### How the Quiz Works

When you take the squad quiz, your answers are converted to an encoded string that is stored in the URL. This allows you to share your result without us storing any data. The encoded string is processed entirely in your browser.

### Cookies

We do not set cookies directly. Google AdSense may set cookies as part of their ad-serving process. You can opt out at https://www.google.com/settings/ads.

### Google AdSense

We use Google AdSense to display ads. Google uses cookies to serve ads based on your visit. Learn more: https://policies.google.com/privacy

### Data Security

All quiz data stays in your browser. Nothing is sent to a server.

### Contact

Questions? Email support@csskey.com`,
  },
  terms: {
    title: "Terms of Service",
    content: `## Terms of Service

**Last updated: July 2026**

By using this site, you agree to these terms.

### Use of Service

This site is for entertainment. Squad roles and metrics are creative interpretations of friend group dynamics, not professional psychological advice. The audit report is a reflection of your answers, not a clinical assessment.

### Intellectual Property

All content is owned by us. You may share links freely. You may not copy or republish the analysis text.

### Disclaimer

The site is provided "as is" without warranties. We make no guarantees about accuracy. The roles and metrics are interpretive frameworks, not scientific measurements.

### Contact

Questions? Email support@csskey.com`,
  },
  contact: {
    title: "Contact",
    content: `## Contact

Found a bug or have a role suggestion? Email works best.

### Email

support@csskey.com

### Response Time

Most emails get a reply within two business days.

### Submit a Role

Have a squad role that is not in our database? Send it and I might add it. Include the role name, a tagline, responsibilities, strengths, and weaknesses, and a brief explanation of why it matters.`,
  },
};

export default function StaticPage({ page }: { page: string }) {
  const info = PAGES[page];
  if (!info) return (
      <div className="fade-in" style={{ maxWidth: 680, margin: '0 auto', padding: '60px 24px', textAlign: 'center' }}>
        <Helmet>
          <title>Page Not Found</title>
          <meta name="robots" content="noindex,nofollow" />
        </Helmet>
        <h1 className="mono" style={{ fontSize: '1.5rem', marginBottom: 16 }}>404 - Page Not Found</h1>
        <p style={{ marginBottom: 24, color: 'var(--text-soft)' }}>The page you are looking for does not exist.</p>
        <Link to="/" style={{ color: 'var(--green)' }}>← Back to Home</Link>
      </div>
    );

  let isFirstParagraph = true;

  const canonicalUrl = `https://squad.csskey.com/${page}`;
  const pageTitle = `${info.title} - Squad Audit`;
  const pageDescription = `Squad Audit ${info.title.toLowerCase()} page.`;

  return (
    <div className="fade-in" style={{ maxWidth: 680, margin: "0 auto" }}>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": pageTitle,
          "description": pageDescription,
          "url": canonicalUrl
        })}</script>
      </Helmet>

      <article>
        {info.content.split("\n").map((line, i) => {
          if (line.startsWith("## ")) {
            return (
              <h1 key={i} style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--text)", marginBottom: 32, paddingBottom: 24, borderBottom: "1px solid var(--border)", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
                {line.replace("## ", "")}
              </h1>
            );
          }
          if (line.startsWith("### ")) {
            return (
              <h2 key={i} style={{ fontSize: "1.25rem", fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--text)", margin: "36px 0 12px" }}>
                {line.replace("### ", "")}
              </h2>
            );
          }
          if (line.startsWith("**")) {
            return (
              <p key={i} style={{ fontWeight: 700, color: "var(--primary)", margin: "20px 0 8px", fontSize: 13, fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {line.replace(/\*\*/g, "")}
              </p>
            );
          }
          if (line.trim() === "") {
            isFirstParagraph = false;
            return <div key={i} style={{ height: 16 }} />;
          }
          if (line.startsWith("Email: ")) {
            return (
              <p key={i} style={{ margin: "6px 0", fontSize: 16, lineHeight: 1.7, fontFamily: "var(--font-body)", color: "var(--text)" }}>
                <a href="mailto:support@csskey.com" style={{ color: "var(--primary)", textDecoration: "underline", textUnderlineOffset: 3 }}>{line.replace("Email: ", "")}</a>
              </p>
            );
          }
          if (line.startsWith("- ")) {
            return (
              <p key={i} style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text)", margin: "4px 0", paddingLeft: 20, position: "relative", fontFamily: "var(--font-body)" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--primary)" }}>▸</span>
                {line.replace("- ", "")}
              </p>
            );
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
  );
}
