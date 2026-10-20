import { hubs, WORLD_H, WORLD_W, worldDotsPath } from "../data/worldMap";

type Anchor = "start" | "end";
const targets = [
  { key: "newYork", label: "United Nations · New York", short: "New York", anchor: "end" as Anchor, dx: -10, dy: -10, mAnchor: "start" as Anchor, mdx: 10, mdy: 22 },
  { key: "geneva", label: "Geneva", short: "Geneva", anchor: "end" as Anchor, dx: -10, dy: -6, mAnchor: "end" as Anchor, mdx: -10, mdy: -6 },
  { key: "addis", label: "African Union · Addis Ababa", short: "Addis", anchor: "start" as Anchor, dx: 12, dy: -10, mAnchor: "start" as Anchor, mdx: 10, mdy: -10 },
] as const;

const A = hubs.abuja;

function arc(to: readonly [number, number]) {
  const [x1, y1] = A;
  const [x2, y2] = to;
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 - Math.max(40, Math.hypot(x2 - x1, y2 - y1) * 0.35);
  return `M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}`;
}

function MapSvg({ viewBox, compact, className }: { viewBox: string; compact?: boolean; className: string }) {
  const fs = compact ? 14 : 11;
  return (
    <svg
      viewBox={viewBox}
      className={className}
      role="img"
      aria-label="Dotted world map with connections from Abuja to New York, Geneva and Addis Ababa"
    >
      <path d={worldDotsPath} stroke="var(--color-sage)" strokeOpacity="0.55" strokeWidth="3.6" strokeLinecap="round" />

      {targets.map((t, i) => (
        <path
          key={t.key}
          d={arc(hubs[t.key])}
          fill="none"
          stroke="var(--color-clay)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="5 6"
          className="map-arc"
          style={{ animationDelay: `${i * 0.35}s` }}
        />
      ))}

      {targets.map((t) => {
        const [x, y] = hubs[t.key];
        return (
          <g key={t.key}>
            <circle cx={x} cy={y} r="4" fill="var(--color-paper)" />
            <text
              x={x + (compact ? t.mdx : t.dx)}
              y={y + (compact ? t.mdy : t.dy)}
              textAnchor={compact ? t.mAnchor : t.anchor}
              fontFamily="var(--font-mono)"
              fontSize={fs}
              letterSpacing="1"
              fill="var(--color-paper)"
              fillOpacity="0.95" stroke="var(--color-forest)" strokeWidth="4" paintOrder="stroke"
            >
              {compact ? t.short : t.label}
            </text>
          </g>
        );
      })}

      <circle cx={A[0]} cy={A[1]} r="7" fill="var(--color-clay)" className="map-pulse" />
      <circle cx={A[0]} cy={A[1]} r="7" fill="var(--color-clay)" />
      <circle cx={A[0]} cy={A[1]} r="2.6" fill="var(--color-paper)" />
      <text x={A[0] - 14} y={A[1] + (compact ? 30 : 26)} textAnchor="end" fontFamily="var(--font-mono)" fontSize={compact ? 14 : 12} letterSpacing="1.2" fill="var(--color-paper)" stroke="var(--color-forest)" strokeWidth="4" paintOrder="stroke">
        {compact ? "ABUJA · NASC" : "ABUJA · NASC · AUG 2025"}
      </text>
    </svg>
  );
}

export default function WorldMap() {
  return (
    <section id="world" className="relative bg-forest text-paper px-6 md:px-12 lg:px-16 py-14 md:py-32 overflow-hidden">
      <div className="max-w-[1150px] mx-auto">
        <div className="reveal grid md:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-16 items-end mb-10 md:mb-14">
          <div>
            <div className="font-mono text-xs tracking-[0.22em] uppercase text-clay">03 — The world</div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.98] mt-4">
              Every border is a <em className="text-clay">conversation</em> waiting to happen
            </h2>
          </div>
          <p className="text-lg text-paper/70 leading-relaxed">
            It started in Abuja, inside a national institution. The rooms I want to work in sit in cities like New York, Geneva and Addis Ababa, where states and peoples come to the table.
          </p>
        </div>

        <div className="reveal relative rounded-[28px] border border-paper/15 bg-black/15 p-3 md:p-8" style={{ ["--d" as string]: "100ms" }}>
          <MapSvg viewBox={`0 0 ${WORLD_W} ${WORLD_H}`} className="hidden md:block w-full h-auto" />
          <MapSvg viewBox="270 70 420 235" compact className="md:hidden w-full h-auto" />
        </div>

        <ul className="reveal mt-8 flex flex-wrap gap-x-10 gap-y-3 font-mono text-xs tracking-[0.16em] uppercase text-paper/60" style={{ ["--d" as string]: "160ms" }}>
          <li className="flex items-center gap-3"><span className="w-3 h-3 rounded-full bg-clay" /> Where I started</li>
          <li className="flex items-center gap-3"><span className="w-3 h-3 rounded-full bg-paper" /> Diplomacy hubs I follow</li>
        </ul>
      </div>
    </section>
  );
}
