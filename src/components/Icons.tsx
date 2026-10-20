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

export const WhatsApp = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.2-3.58.94.96-3.5-.22-.36a9.43 9.43 0 0 1-1.45-5.04c0-5.21 4.25-9.45 9.47-9.45 2.53 0 4.9.99 6.69 2.77a9.4 9.4 0 0 1 2.77 6.69c0 5.21-4.25 9.46-9.46 9.46zM20.1 3.9A11.35 11.35 0 0 0 12.05.5C5.78.5.68 5.6.68 11.86c0 2 .52 3.96 1.52 5.69L.5 23.5l6.1-1.6a11.36 11.36 0 0 0 5.44 1.39h.01c6.27 0 11.37-5.1 11.37-11.37 0-3.04-1.18-5.89-3.32-8.03z" />
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
