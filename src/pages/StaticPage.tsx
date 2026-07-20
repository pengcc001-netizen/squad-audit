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

This privacy policy explains how Squad Audit ("we", "us", or "our") handles information when you visit squad.csskey.com (the "Site"). We are committed to being transparent about what we collect, how we use it, and the choices you have.

### Information We Collect

Squad Audit does not collect personal information. We do not require accounts, logins, email addresses, or any form of registration. When you take the squad quiz, your answers are converted into an encoded string that is stored entirely in the URL of your browser. This encoded string is never transmitted to our server, never written to a database, and never associated with your identity or device. We do not collect your IP address for tracking purposes, and we do not build user profiles.

### How the Quiz Works

When you take the squad quiz, your answers are converted to an encoded string that is stored in the URL. This allows you to share your result by copying and pasting the link, without us storing any data on a server. The encoded string is processed entirely in your browser, meaning your answers remain on your device. If you close the page without sharing the link, your quiz results are gone.

### Cookies

We do not set cookies directly. The only cookies that may be set on your browser come from third-party advertising partners, specifically Google AdSense, as part of their ad-serving process. These cookies allow Google to display relevant ads and measure ad performance. You can review and opt out of personalized advertising at https://www.google.com/settings/ads. You can also clear cookies in your browser settings at any time.

### Google AdSense

We use Google AdSense to display ads on the Site. Google, as a third-party vendor, uses cookies to serve ads based on your prior visits to this and other websites. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet. You may learn more about how Google handles data and your privacy options by reviewing Google's Privacy Policy at https://policies.google.com/privacy. You may also opt out of personalized advertising by visiting Google Ads Settings.

### Data Security

All quiz data stays in your browser. Nothing is sent to a server, which means there is no central database that could be breached or leaked. The only data that leaves your device is what you voluntarily choose to share by copying a result URL. We cannot recover lost result links because we never store them.

### Children's Privacy

The Site is not directed at children under the age of 13, and we do not knowingly collect personal information from children under 13. Because we do not collect personal information from any users, children are not at risk of having their data stored. If you believe a child has provided information through a shared result URL, please note that we have no way to access or delete that data, as it lives only in the link itself.

### Contact

If you have any questions about this Privacy Policy, please contact us at support@csskey.com. We will do our best to respond within a reasonable timeframe.`,
  },
  terms: {
    title: "Terms of Service",
    content: `## Terms of Service

**Last updated: July 2026**

These Terms of Service ("Terms") govern your use of squad.csskey.com (the "Site") operated by Squad Audit ("we", "us", or "our"). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree to any part of these Terms, you should not access or use the Site.

### Acceptance of Terms

By visiting, browsing, or otherwise using the Site, you acknowledge that you have read, understood, and agree to be bound by these Terms and any future modifications. We may update these Terms from time to time without prior notice. Your continued use of the Site after any changes constitutes acceptance of the revised Terms. It is your responsibility to review these Terms periodically.

### Use of Service

This site is for entertainment purposes only. Squad roles, health metrics, and audit reports are creative interpretations of friend group dynamics, not professional psychological advice or clinical assessments. The audit report is a reflection of your quiz answers, not a diagnostic tool. You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use of the Site.

### Intellectual Property

All content on this Site, including but not limited to the squad roles, health metrics, blog posts, design, layout, and underlying code, is owned by us and protected by applicable intellectual property laws. You may share links to the Site freely. You may not copy, republish, reproduce, modify, distribute, or otherwise exploit the analysis text or other content without our prior written permission.

### Disclaimer of Warranties

The Site is provided "as is" and "as available", without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We make no guarantees about the accuracy, reliability, completeness, or timeliness of the content. The roles and metrics are interpretive frameworks, not scientific measurements. Your reliance on the Site is at your sole risk.

### Limitation of Liability

To the fullest extent permitted by applicable law, we shall not be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of the Site. The framework is designed for self-reflection and conversation, not for guiding real-world decisions about your relationships.

### Contact

If you have any questions about these Terms, please contact us at support@csskey.com.`,
  },
  contact: {
    title: "Contact",
    content: `## Contact

Found a bug, have a role suggestion, or want to share feedback about the site? Email works best. I read every message and try to respond personally when I can.

### Email

support@csskey.com

### Response Time

Most emails get a reply within two business days. If your message is complex or requires research on my end, it may take a little longer. I appreciate your patience.

### What to Include

To help me respond quickly, please include the following in your email: a clear description of the issue or suggestion, the page or feature it relates to, and any screenshots or examples if relevant. The more context you provide, the faster I can help.

### Bug Reports

If you found a bug, please include the browser and device you are using, the URL of the page where it happened, and a description of what you expected versus what actually happened. Steps to reproduce the issue are especially helpful.

### Feature Requests

Have an idea for a new feature, quiz question, or squad role? Send it along. I cannot promise to implement every suggestion, but I keep a running list and prioritize based on what would help the most users.

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
  const pageDescription = info.content.substring(0, 155).replace(/\n/g, ' ').replace(/[#*]/g, '').trim();

  return (
    <div className="fade-in" style={{ maxWidth: 680, margin: "0 auto" }}>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
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
