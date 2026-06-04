import { useState, useEffect, useRef } from "react";

const CANVAS_W = 640;
const CANVAS_H = 460;
const GAP = 14; // min px between circle edges

const painTexts = [
  "Hybrid Path Blindness",
  "Lost Azure Traffic",
  "Invisible Policy Outcomes",
  "Inconsistent Security Controls",
  "VPN Path Fog",
  "Untraceable Network Breaks",
  "Rule Intent Fog",
  "Zero Trust Visibility",
  "Security Group Blindness",
];

const bubbleMeta = [
  { mentions: 34, trend: "up"   as const, bg: "#EDE9FE", fg: "#5B21B6" },
  { mentions: 27, trend: "down" as const, bg: "#FCE7F3", fg: "#9D174D" },
  { mentions: 19, trend: "up"   as const, bg: "#D1FAE5", fg: "#065F46" },
  { mentions: 42, trend: "up"   as const, bg: "#FFEDD5", fg: "#C2410C" },
  { mentions: 15, trend: "down" as const, bg: "#FEF9C3", fg: "#854D0E" },
  { mentions: 23, trend: "up"   as const, bg: "#DBEAFE", fg: "#1E40AF" },
  { mentions: 11, trend: "down" as const, bg: "#CCFBF1", fg: "#0F766E" },
  { mentions: 38, trend: "up"   as const, bg: "#FFE4E6", fg: "#9F1239" },
  { mentions: 29, trend: "up"   as const, bg: "#E0E7FF", fg: "#3730A3" },
];

// Seeded LCG so layout is stable across renders
function makeRng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

interface PlacedBubble {
  id: number;
  text: string;
  mentions: number;
  trend: "up" | "down";
  bg: string;
  fg: string;
  size: number;
  left: number;
  top: number;
  cx: number;
  cy: number;
}

function generateLayout(): PlacedBubble[] {
  const rng = makeRng(17); // seed chosen for good spread
  const placed: PlacedBubble[] = [];

  for (let i = 0; i < painTexts.length; i++) {
    // Size proportional to mentions, plus small random jitter
    const { mentions } = bubbleMeta[i];
    const minM = 11, maxM = 42;
    const t = (mentions - minM) / (maxM - minM);
    const size = Math.round(72 + t * 44 + (rng() - 0.5) * 10); // 72-116px
    const r = size / 2;

    let cx = r + 8, cy = r + 8;

    for (let attempt = 0; attempt < 500; attempt++) {
      const tx = r + 10 + rng() * (CANVAS_W - 2 * r - 20);
      const ty = r + 10 + rng() * (CANVAS_H - 2 * r - 20);

      const overlaps = placed.some((p) => {
        const dist = Math.sqrt((tx - p.cx) ** 2 + (ty - p.cy) ** 2);
        return dist < r + p.size / 2 + GAP;
      });

      if (!overlaps) {
        cx = tx;
        cy = ty;
        break;
      }
      // fallback on last attempt: just use the position
      if (attempt === 499) { cx = tx; cy = ty; }
    }

    placed.push({
      id: i,
      text: painTexts[i],
      ...bubbleMeta[i],
      size,
      left: Math.round(cx - r),
      top: Math.round(cy - r),
      cx,
      cy,
    });
  }

  return placed;
}

// Computed once at module load — stable positions on every render
const LAYOUT = generateLayout();

export const HeroCards = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [offsets, setOffsets] = useState<{ x: number; y: number }[]>(
    () => LAYOUT.map(() => ({ x: 0, y: 0 }))
  );

  useEffect(() => {
    if (!wrapRef.current) return;
    const obs = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / CANVAS_W);
    });
    obs.observe(wrapRef.current);
    return () => obs.disconnect();
  }, []);

  // Drift: each bubble moves on its own staggered period
  useEffect(() => {
    const ids = LAYOUT.map((_, i) => {
      const period = 2400 + i * 350 + Math.random() * 800;
      return setInterval(() => {
        setOffsets((prev) => {
          const next = [...prev];
          next[i] = {
            x: (Math.random() - 0.5) * 14,
            y: (Math.random() - 0.5) * 14,
          };
          return next;
        });
      }, period);
    });
    return () => ids.forEach(clearInterval);
  }, []);

  return (
    <div className="w-full">
      <div className="rounded-2xl border border-border bg-card shadow-xl overflow-hidden">
        {/* Header */}
        <div className="px-4 py-3 border-b border-border flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground leading-none mb-1">
              Pain Signal Radar
            </p>
            <p className="text-sm font-bold text-foreground leading-tight">
              Network Visibility Gaps
            </p>
          </div>
          <div className="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/30 px-2.5 py-1 rounded-full">
            <span className="block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400">
              Live
            </span>
          </div>
        </div>

        {/* Outer wrapper: measures real column width */}
        <div
          ref={wrapRef}
          className="relative bg-background/30 overflow-hidden"
          style={{ height: CANVAS_H * scale }}
        >
          {/* Fixed logical canvas scaled to fill */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: CANVAS_W,
              height: CANVAS_H,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          >
            {LAYOUT.map((b) => {
              const isHovered = hoveredId === b.id;
              const isUp = b.trend === "up";
              // font sizes large enough to stay readable after scale
              const textSize = Math.max(10, Math.round(b.size * 0.115));
              const numSize  = Math.max(9,  Math.round(b.size * 0.095));

              return (
                // Drift wrapper — slow translate only
                <div
                  key={b.id}
                  style={{
                    position: "absolute",
                    left: b.left,
                    top: b.top,
                    width: b.size,
                    height: b.size,
                    transform: `translate(${offsets[b.id].x}px, ${offsets[b.id].y}px)`,
                    transition: "transform 2.6s ease-in-out",
                    zIndex: isHovered ? 20 : 1,
                  }}
                >
                  {/* Visual bubble — fast hover scale only */}
                  <div
                    onMouseEnter={() => setHoveredId(b.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={isUp ? "bubble-trend-up" : ""}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      backgroundColor: b.bg,
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: `${Math.round(b.size * 0.12)}px`,
                      boxShadow: "inset 0 0 0 1.5px rgba(0,0,0,0.10)",
                      transition: "transform 0.22s ease",
                      transform: isHovered ? "scale(1.18)" : "scale(1)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: textSize,
                        color: b.fg,
                        fontWeight: 600,
                        textAlign: "center",
                        lineHeight: 1.2,
                        margin: 0,
                        wordBreak: "break-word",
                        width: "100%",
                      }}
                    >
                      {b.text}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: 2, marginTop: 4 }}>
                      <span style={{ fontSize: numSize, color: isUp ? "#10B981" : "#EF4444", fontWeight: 700, lineHeight: 1 }}>
                        {isUp ? "▲" : "▼"}
                      </span>
                      <span style={{ fontSize: numSize, color: b.fg, opacity: 0.65, lineHeight: 1 }}>
                        {b.mentions}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
