import { profile } from "../data/profile";

function Stamp({ text, org }: { text: string; org: string }) {
  const ring = `${org.toUpperCase()} • ABUJA • `;
  return (
    <svg viewBox="0 0 200 200" className="w-40 h-40 md:w-48 md:h-48 text-clay -rotate-[14deg] mix-blend-multiply" aria-hidden="true">
      <defs>
        <path id="stamp-ring" d="M100 100 m-74 0 a74 74 0 1 1 148 0 a74 74 0 1 1 -148 0" />
      </defs>
      <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="54" fill="none" stroke="currentColor" strokeWidth="1" />
      <text fontSize="11.5" letterSpacing="1.6" fontFamily="var(--font-mono)" fontWeight="500" fill="currentColor">
        <textPath href="#stamp-ring">{ring.repeat(1)}</textPath>
      </text>
      <text x="100" y="94" textAnchor="middle" fontFamily="var(--font-display)" fontSize="26" fill="currentColor">Intern</text>
      <text x="100" y="116" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" letterSpacing="1.5" fill="currentColor">{text}</text>
    </svg>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 lg:px-16 py-20 md:py-32 bg-paper-deep relative overflow-hidden">
      <div className="max-w-[1150px] mx-auto">
        <div className="reveal mb-12 md:mb-16">
          <div className="font-mono text-xs tracking-[0.22em] uppercase text-clay">02 — Experience</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.98] mt-4">Field notes</h2>
        </div>

        {profile.experience.map((e) => (
          <article key={e.org} className="reveal relative bg-paper rounded-[28px] border border-ink/15 shadow-[0_30px_60px_-35px_rgba(15,42,35,0.5)] overflow-hidden">
            <div className="flex items-center justify-between gap-4 px-6 md:px-10 py-4 bg-forest text-paper font-mono text-[11px] tracking-[0.2em] uppercase">
              <span>Placement record</span>
              <span className="text-paper/60">{e.date}</span>
            </div>

            <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 p-6 md:p-12">
              <div>
                <div className="font-mono text-xs tracking-[0.18em] uppercase text-muted">{e.role}</div>
                <h3 className="font-display text-4xl md:text-6xl leading-[1] mt-3">{e.org}</h3>
                <div className="mt-4 flex items-center gap-2 text-muted">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  {e.place}
                </div>
                <p className="mt-6 text-lg text-ink/80 leading-relaxed max-w-xl">{e.summary}</p>
              </div>

              <div>
                <div className="font-mono text-xs tracking-[0.18em] uppercase text-muted mb-4">What I took away</div>
                <ul className="space-y-4">
                  {e.takeaways.map((t) => (
                    <li key={t} className="flex gap-3 leading-snug">
                      <span className="mt-2 w-2 h-2 rounded-full bg-clay shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex justify-end opacity-90 pointer-events-none">
                  <Stamp text={e.stamp} org={e.org} />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
