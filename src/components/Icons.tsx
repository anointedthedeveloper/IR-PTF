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
