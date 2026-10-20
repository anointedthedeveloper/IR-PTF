import { profile } from "../data/profile";
import { Arrow, ArrowDown, Graticule } from "./Icons";

const RING = "DIPLOMACY • NEGOTIATION • PEACE & CONFLICT • ";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-svh flex items-center overflow-hidden pt-24 lg:pt-14 pb-16 xl:pt-10 px-6 md:px-12 lg:px-16">
      <Graticule className="absolute -right-40 top-1/2 -translate-y-1/2 w-[760px] max-w-none text-forest/10 spin-slower" />

      <div className="relative max-w-[1150px] mx-auto w-full grid xl:grid-cols-[1.2fr_0.8fr] gap-14 xl:gap-8 items-center">
        <div className="order-2 xl:order-1">
          <div className="reveal font-mono text-[11px] sm:text-xs tracking-[0.22em] uppercase text-clay flex items-center gap-3">
            <span className="w-10 h-px bg-clay" />
            International Relations · Graduate
          </div>

          <h1 className="font-display text-[clamp(3.6rem,10.5vw,8.4rem)] leading-[0.9] mt-6">
            {profile.name.split(" ").map((w, i) => (
              <span key={w} className="reveal block" style={{ ["--d" as string]: `${i * 110}ms` }}>
                {i === 1 ? <em className="text-clay">{w}</em> : w}
              </span>
            ))}
          </h1>

          <p className="reveal font-display italic text-3xl md:text-4xl mt-7 text-forest-soft" style={{ ["--d" as string]: "360ms" }}>
            Negotiating a more peaceful world.
          </p>

          <p className="reveal mt-5 max-w-xl text-lg text-muted leading-relaxed" style={{ ["--d" as string]: "440ms" }}>
            An {profile.role} specialising in diplomacy, negotiation skills, and peace &amp; conflict resolution.
          </p>

          <div className="reveal mt-9 flex flex-col sm:flex-row gap-4" style={{ ["--d" as string]: "520ms" }}>
            <a href="#focus" className="group inline-flex items-center justify-center gap-3 rounded-full bg-forest text-paper px-8 py-4 font-semibold hover:bg-forest-soft transition">
              Explore my focus <ArrowDown className="w-5 h-5 group-hover:translate-y-0.5 transition" />
            </a>
            <a href="#contact" className="group inline-flex items-center justify-center gap-3 rounded-full border border-ink/25 px-8 py-4 font-semibold hover:border-ink hover:bg-ink hover:text-paper transition">
              Get in touch <Arrow className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>
            {profile.cvUrl && (
              <a href={profile.cvUrl} download className="inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 font-semibold text-clay hover:underline underline-offset-4">
                Download CV
              </a>
            )}
          </div>
        </div>

        <div className="order-1 xl:order-2 reveal flex justify-center xl:justify-end" style={{ ["--d" as string]: "120ms" }}>
          <div className="relative w-[min(290px,68vw)] sm:w-[min(340px,78vw)] xl:w-[min(400px,100%)]">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[999px] rounded-b-3xl border border-forest/40" aria-hidden="true" />
            <div className="relative aspect-[3/4] rounded-t-[999px] rounded-b-3xl overflow-hidden bg-paper-deep shadow-2xl">
              <img
                src="/images/portrait.jpg"
                alt={`Portrait of ${profile.name}`}
                width={853}
                height={1280}
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover object-[50%_18%]"
              />
            </div>

            <div className="absolute top-10 -right-3 sm:-right-8 z-10 rounded-2xl bg-paper shadow-xl px-4 py-3 border border-ink/10">
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted">Intern</div>
              <div className="font-display text-xl leading-tight">NASC · Abuja</div>
            </div>

            <div className="absolute -bottom-8 -left-8 sm:-left-12 w-32 h-32 rounded-full bg-paper shadow-xl flex items-center justify-center">
              <svg viewBox="0 0 120 120" className="absolute inset-0 spin-slow" aria-hidden="true">
                <defs>
                  <path id="ring" d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" />
                </defs>
                <text fontSize="10.5" letterSpacing="2.2" fontFamily="var(--font-mono)" fill="var(--color-forest)">
                  <textPath href="#ring">{RING}</textPath>
                </text>
              </svg>
              <div className="w-12 h-12 rounded-full bg-clay text-white flex items-center justify-center">
                <Arrow className="w-5 h-5 -rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
