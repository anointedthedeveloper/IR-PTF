import type { JSX } from "react";

type P = { className?: string };

export const Arrow = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowDown = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

export const Plus = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className={className} aria-hidden="true">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Mail = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const LinkedIn = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

/** Decorative latitude/longitude grid. */
export const Graticule = ({ className = "" }: P) => (
  <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1" className={className} aria-hidden="true">
    <circle cx="200" cy="200" r="190" />
    {[150, 105, 55].map((rx) => (
      <ellipse key={rx} cx="200" cy="200" rx={rx} ry="190" />
    ))}
    <path d="M200 10v380M10 200h380" />
    {[60, 110, 150].map((d) => (
      <g key={d}>
        <path d={`M${200 - Math.sqrt(190 ** 2 - d ** 2)} ${200 - d}h${2 * Math.sqrt(190 ** 2 - d ** 2)}`} />
        <path d={`M${200 - Math.sqrt(190 ** 2 - d ** 2)} ${200 + d}h${2 * Math.sqrt(190 ** 2 - d ** 2)}`} />
      </g>
    ))}
  </svg>
);

export const Monogram = ({ className = "" }: P) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
      <circle cx="32" cy="32" r="18" />
      <ellipse cx="32" cy="32" rx="8" ry="18" />
      <path d="M14 32h36M17 22h30M17 42h30" />
    </g>
    <circle cx="45" cy="19" r="5" fill="var(--color-clay)" />
  </svg>
);

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export function ToolIcon({ name, className = "" }: { name: string; className?: string }) {
  const paths: Record<string, JSX.Element> = {
    ear: <path d="M7 10a5 5 0 0 1 10 0c0 3-2 3.5-2.5 5.5S13 20 11 20a3 3 0 0 1-3-3M10 10a2 2 0 0 1 4 0" />,
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3 12h18" />
      </>
    ),
    scales: <path d="M12 4v16M7 20h10M5 8h14M5 8l-3 7a3.5 3.5 0 0 0 6 0L5 8zm14 0-3 7a3.5 3.5 0 0 0 6 0l-3-7z" />,
    search: (
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4.5 4.5" />
      </>
    ),
    handshake: <path d="M3 12l4-4 4 1.5L14 7l4 3.5 3 1.5M3 12l5 5a2 2 0 0 0 3 0l.5-.5M11.5 16.5l1.5 1.5a2 2 0 0 0 3-.5l1-2M21 12l-4 4" />,
    shield: <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3zM9 12l2 2 4-4" />,
  };
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
