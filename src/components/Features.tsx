import { useState, useEffect } from "react";

const DURATION = 7000;
const TOTAL = 4;
const pad = (n: number) => (n < 10 ? "0" : "") + n;

const railLabels = [
  { num: "01", label: "The Problem" },
  { num: "02", label: "The Architecture" },
  { num: "03", label: "Signal → Intelligence" },
  { num: "04", label: "Intelligence → Message" },
];

const slides = [
  {
    kicker: "The Problem",
    title: "You're Flying Blind",
    body: "Quarterly reports and months-old surveys are stale before they even hit your desk. You're missing real-time competitor moves, community crises, and critical market shifts happening right now.",
    punch: "Stop driving your GTM through the rearview mirror.",
    visual: (
      <svg viewBox="0 0 400 300" role="img" aria-label="A radar sweep circling blurred, drifting orbs it never locks onto">
        <defs>
          <filter id="s-blur1" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>
        <circle cx="200" cy="150" r="104" fill="none" stroke="#dbe4f5" strokeWidth="1" />
        <circle cx="200" cy="150" r="66" fill="none" stroke="#dbe4f5" strokeWidth="1" />
        <circle cx="200" cy="150" r="30" fill="none" stroke="#dbe4f5" strokeWidth="1" />
        <line x1="64" y1="150" x2="336" y2="150" stroke="#e7eef8" strokeWidth="1" />
        <line x1="200" y1="42" x2="200" y2="258" stroke="#e7eef8" strokeWidth="1" />
        <g className="s-sweep">
          <path d="M200 150 L200 46 A104 104 0 0 1 290 98 Z" fill="#1a6ff4" opacity="0.09" />
          <line x1="200" y1="150" x2="200" y2="46" stroke="#1a6ff4" strokeWidth="1.5" opacity="0.45" />
        </g>
        <g filter="url(#s-blur1)">
          <circle className="s-drift1" cx="132" cy="102" r="16" fill="#e89bd4" opacity="0.6" />
          <circle className="s-drift2" cx="268" cy="118" r="13" fill="#8b7de8" opacity="0.58" />
          <circle className="s-drift3" cx="248" cy="202" r="18" fill="#e8a03c" opacity="0.5" />
          <circle className="s-drift1" cx="150" cy="208" r="11" fill="#5ba85b" opacity="0.5" />
        </g>
        <circle cx="200" cy="150" r="4" fill="#1a6ff4" />
      </svg>
    ),
  },
  {
    kicker: "The Architecture",
    title: "Two Engines. One Signal.",
    body: "Your internal DNA - value props, positioning, and brand voice - fused with live market intelligence: practitioner discourse, competitor financials, and industry news.",
    punch: "Your voice. The market's pulse. Perfected.",
    visual: (
      <svg viewBox="0 0 400 300" role="img" aria-label="A blue cluster and a pastel cluster flowing inward to fuse into one pulsing core">
        <g stroke="#dbe4f5" strokeWidth="1">
          <line x1="72" y1="92" x2="200" y2="150" />
          <line x1="60" y1="150" x2="200" y2="150" />
          <line x1="76" y1="210" x2="200" y2="150" />
          <line x1="328" y1="94" x2="200" y2="150" />
          <line x1="340" y1="150" x2="200" y2="150" />
          <line x1="324" y1="208" x2="200" y2="150" />
        </g>
        <g>
          <circle className="s-fl-t" cx="72" cy="92" r="11" fill="#1a6ff4" opacity="0.85" />
          <circle className="s-fl-m" cx="60" cy="150" r="14" fill="#5ba85b" />
          <circle className="s-fl-b" cx="76" cy="210" r="9" fill="#ad516b" opacity="0.72" />
        </g>
        <g>
          <circle className="s-fr-t" cx="328" cy="94" r="10" fill="#e89bd4" opacity="0.85" />
          <circle className="s-fr-m" cx="340" cy="150" r="13" fill="#8b7de8" />
          <circle className="s-fr-b" cx="324" cy="208" r="11" fill="#e8a03c" opacity="0.8" />
        </g>
        <circle className="s-pulse" cx="200" cy="150" r="26" fill="none" stroke="#1a6ff4" strokeWidth="1.5" />
        <g className="s-core">
          <circle cx="200" cy="150" r="22" fill="#1a6ff4" opacity="0.12" />
          <circle cx="200" cy="150" r="11" fill="#1a6ff4" />
        </g>
        <text x="68" y="252" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="500" fill="#8896aa">Your DNA</text>
        <text x="332" y="252" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="500" fill="#8896aa">The Market</text>
      </svg>
    ),
  },
  {
    kicker: "Phase 1 · Signal to Intelligence",
    title: "From Noise to Quantified Intelligence",
    body: "High-frequency pain clusters. Competitor vulnerabilities. Strategic triggers. Ready-to-use messaging frameworks. All sourced, mapped, and actionable.",
    punch: "Not opinions. Observable evidence.",
    visual: (
      <svg viewBox="0 0 400 300" role="img" aria-label="Noisy dots feeding in on the left, resolving into ranked bars on the right">
        <g>
          <circle className="s-feed" style={{ animationDelay: "0s" }} cx="44" cy="92" r="5" fill="#e89bd4" />
          <circle className="s-feed" style={{ animationDelay: "0.7s" }} cx="44" cy="150" r="4" fill="#8b7de8" />
          <circle className="s-feed" style={{ animationDelay: "1.4s" }} cx="44" cy="208" r="5" fill="#e8a03c" />
          <circle className="s-feed" style={{ animationDelay: "2.1s" }} cx="44" cy="120" r="4" fill="#5ba85b" />
          <circle className="s-feed" style={{ animationDelay: "1s" }} cx="44" cy="178" r="4" fill="#1a6ff4" />
        </g>
        <line x1="186" y1="58" x2="186" y2="244" stroke="#e7eef8" strokeWidth="1" />
        <rect className="s-bar" style={{ animationDelay: "0.10s" }} x="190" y="72" rx="7.5" height="15" width="158" fill="#1a6ff4" />
        <rect className="s-bar" style={{ animationDelay: "0.25s" }} x="190" y="108" rx="7.5" height="15" width="126" fill="#8b7de8" />
        <rect className="s-bar" style={{ animationDelay: "0.40s" }} x="190" y="144" rx="7.5" height="15" width="98" fill="#e89bd4" />
        <rect className="s-bar" style={{ animationDelay: "0.55s" }} x="190" y="180" rx="7.5" height="15" width="72" fill="#e8a03c" />
        <rect className="s-bar" style={{ animationDelay: "0.70s" }} x="190" y="216" rx="7.5" height="15" width="50" fill="#5ba85b" />
      </svg>
    ),
  },
  {
    kicker: "Phase 2 · Intelligence to Message",
    title: "Resolve the Market First. Then Write.",
    body: "Instant positioning, targeted campaign angles, and high-impact GTM assets. All grounded in what the market actually said - not what a generic AI imagined.",
    punch: "Earn the right to write it.",
    visual: (
      <svg viewBox="0 0 400 300" role="img" aria-label="A pulse traveling a pipeline through Positioning, Messaging, Angles, and Assets">
        <line x1="55" y1="150" x2="345" y2="150" stroke="#e7eef8" strokeWidth="2.5" />
        <line className="s-dash" x1="55" y1="150" x2="345" y2="150" stroke="#1a6ff4" strokeWidth="2.5" strokeDasharray="5 11" opacity="0.5" />
        <g>
          <circle className="s-glow" style={{ animationDelay: "0s" }} cx="55" cy="150" r="18" fill="#1a6ff4" />
          <circle cx="55" cy="150" r="9" fill="#1a6ff4" />
          <text x="55" y="186" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="500" fill="#4a5568">Positioning</text>
        </g>
        <g>
          <circle className="s-glow" style={{ animationDelay: "1s" }} cx="152" cy="150" r="18" fill="#8b7de8" />
          <circle cx="152" cy="150" r="9" fill="#8b7de8" />
          <text x="152" y="186" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="500" fill="#4a5568">Messaging</text>
        </g>
        <g>
          <circle className="s-glow" style={{ animationDelay: "2s" }} cx="248" cy="150" r="18" fill="#e89bd4" />
          <circle cx="248" cy="150" r="9" fill="#e89bd4" />
          <text x="248" y="186" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="500" fill="#4a5568">Angles</text>
        </g>
        <g>
          <circle className="s-glow" style={{ animationDelay: "3s" }} cx="345" cy="150" r="18" fill="#e8a03c" />
          <circle cx="345" cy="150" r="9" fill="#e8a03c" />
          <text x="345" y="186" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="500" fill="#4a5568">Assets</text>
        </g>
        <circle className="s-travel" cx="55" cy="150" r="6" fill="#1a6ff4" />
      </svg>
    ),
  },
];

export const Features = () => {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progressKey, setProgressKey] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const go = (n: number) => {
    setCurrent(((n % TOTAL) + TOTAL) % TOTAL);
    setProgressKey((k) => k + 1);
    setResetKey((k) => k + 1);
  };

  const togglePlay = () => {
    setPlaying((p) => !p);
    setProgressKey((k) => k + 1);
  };

  useEffect(() => {
    if (!playing || reducedMotion) return;
    const id = setInterval(() => {
      setCurrent((p) => (p + 1) % TOTAL);
      setProgressKey((k) => k + 1);
    }, DURATION);
    return () => clearInterval(id);
  }, [playing, reducedMotion, resetKey]);

  return (
    <section id="features" className="story-section">
      <div className="story">
        <div className="story-head">
          <p className="story-section-label">The Ansora model</p>
          <h2>From blind spots to a message the market actually recognizes.</h2>
        </div>
        <div className="story-stage">
          <div className="story-rail">
            {railLabels.map(({ num, label }, idx) => (
              <button
                key={idx}
                className={`rail-dot${current === idx ? " active" : ""}`}
                onClick={() => go(idx)}
              >
                <b>{num}</b> {label}
              </button>
            ))}
          </div>

          <div className="story-cards">
            {slides.map((slide, idx) => (
              <article
                key={idx}
                className={`story-card${current === idx ? " active" : ""}`}
              >
                <div className="card-text">
                  <span className="card-kicker">{slide.kicker}</span>
                  <h3>{slide.title}</h3>
                  <p className="card-body">{slide.body}</p>
                  <p className="card-punch">{slide.punch}</p>
                </div>
                <div className="card-visual">{slide.visual}</div>
              </article>
            ))}
          </div>

          <div className="story-nav">
            <button
              className="nav-btn"
              onClick={() => go(current - 1)}
              aria-label="Previous card"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              className="nav-btn"
              onClick={togglePlay}
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? (
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 5l12 7-12 7z" />
                </svg>
              )}
            </button>
            <button
              className="nav-btn"
              onClick={() => go(current + 1)}
              aria-label="Next card"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            <div className="story-progress">
              {playing && !reducedMotion && (
                <div
                  key={progressKey}
                  className="story-progress-bar"
                  style={{ animation: `storyProg ${DURATION}ms linear forwards` }}
                />
              )}
            </div>
            <span className="story-count">
              {pad(current + 1)} / {pad(TOTAL)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
