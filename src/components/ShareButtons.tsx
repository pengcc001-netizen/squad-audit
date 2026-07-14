import { useState } from "react";

interface Props {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: Props) {
  const [copied, setCopied] = useState(false);
  const encoded = encodeURIComponent(url);
  const text = encodeURIComponent(title);

  const share = (platform: string) => {
    const links: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${encoded}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
      reddit: `https://reddit.com/submit?url=${encoded}&title=${text}`,
    };
    window.open(links[platform], "_blank", "width=600,height=400");
  };

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const btnStyle: React.CSSProperties = {
    background: "var(--bg-elevated)",
    color: "var(--text-soft)",
    fontSize: 12,
    padding: "8px 16px",
    border: "1px solid var(--border-strong)",
    borderRadius: "var(--radius-sm)",
    fontFamily: "var(--font-mono)",
    fontWeight: 600,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "all 0.2s ease",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
  };

  const hover = (color: string) => ({
    onMouseEnter: (e: React.MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.style.borderColor = color;
      e.currentTarget.style.color = color;
    },
    onMouseLeave: (e: React.MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.style.borderColor = "var(--border-strong)";
      e.currentTarget.style.color = "var(--text-soft)";
    },
  });

  return (
    <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
      <button onClick={() => share("twitter")} style={btnStyle} {...hover("#1E40AF")}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        Tweet
      </button>
      <button onClick={() => share("facebook")} style={btnStyle} {...hover("#1E40AF")}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        Share
      </button>
      <button onClick={() => share("reddit")} style={btnStyle} {...hover("#1E40AF")}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.054l-2.595-.547-.8 3.747c1.824.07 3.48.632 4.674 1.528a1.75 1.75 0 0 1 1.235-.512c.965 0 1.75.785 1.75 1.75 0 .65-.355 1.22-.885 1.518a3.197 3.197 0 0 1-.062.625c-.098.55-.347 1.06-.733 1.5-.387.44-.897.81-1.515 1.075-.617.266-1.317.418-2.089.418-.781 0-1.485-.155-2.107-.424a4.368 4.368 0 0 1-1.518-1.063 4.21 4.21 0 0 1-.734-1.512 3.227 3.227 0 0 1-.063-.631 1.756 1.756 0 0 1-.885-1.518c0-.965.785-1.75 1.75-1.75.472 0 .9.188 1.215.492a6.964 6.964 0 0 1 4.673-1.526l.83-3.91a.375.375 0 0 1 .43-.286l2.604.547a1.25 1.25 0 0 1 1.139-.736zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.249 1.25 1.249.687 0 1.248-.562 1.248-1.25 0-.687-.561-1.249-1.248-1.249zm5.5 0c-.687 0-1.248.562-1.248 1.25 0 .687.561 1.249 1.249 1.249.687 0 1.25-.562 1.25-1.25 0-.687-.562-1.249-1.25-1.249zm-2.746 4.5c-.97 0-1.873.302-2.584.81a.375.375 0 0 0 .43.614c.61-.442 1.337-.713 2.154-.713.817 0 1.544.27 2.155.713a.375.375 0 0 0 .43-.614c-.71-.508-1.615-.81-2.585-.81z" />
        </svg>
        Reddit
      </button>
      <button onClick={copyLink} style={btnStyle} {...hover("#0D9488")}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
        {copied ? "Copied" : "Copy Link"}
      </button>
    </div>
  );
}
