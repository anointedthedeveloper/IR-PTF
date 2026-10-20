import { profile } from "../data/profile";

export default function About() {
  const facts: [string, string][] = [
    ["Studying", "International Relations"],
    ["Focus", "Diplomacy · Negotiation · Peace & Conflict"],
    ["Experience", `${profile.experience[0].org}, ${profile.experience[0].date}`],
    ["Open to", profile.openTo.join(", ")],
  ];

  return (
    <section id="about" className="px-6 md:px-12 lg:px-16 py-20 md:py-32 bg-paper-deep">
      <div className="max-w-[1150px] mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20 items-center">
        <div className="reveal relative mx-auto w-[min(380px,82vw)] lg:w-full">
          <div className="absolute inset-0 -rotate-6 rounded-[28px] bg-forest" aria-hidden="true" />
          <figure className="relative rotate-2 rounded-[28px] overflow-hidden bg-paper p-3 shadow-2xl">
            <img
              src="/images/outdoors.jpg"
              alt={`${profile.name} smiling outdoors in a red top`}
              width={960}
              height={1280}
              loading="lazy"
              decoding="async"
              className="w-full aspect-[4/5] object-cover object-[60%_20%] rounded-[18px]"
            />
            <figcaption className="px-2 pt-3 pb-1 font-mono text-[11px] tracking-[0.18em] uppercase text-muted">
              Fig. 01 — Curious by default
            </figcaption>
          </figure>
        </div>

        <div>
          <div className="reveal font-mono text-xs tracking-[0.22em] uppercase text-clay">04 — About</div>
          <h2 className="reveal font-display text-5xl md:text-7xl leading-[0.98] mt-4" style={{ ["--d" as string]: "60ms" }}>
            The person behind the <em className="text-clay">briefing</em>
          </h2>
          <div className="mt-8 space-y-5 text-lg text-ink/80 leading-relaxed">
            {profile.about.map((p, i) => (
              <p key={i} className="reveal" style={{ ["--d" as string]: `${120 + i * 90}ms` }}>{p}</p>
            ))}
          </div>

          <dl className="reveal mt-10 border-t border-ink/20" style={{ ["--d" as string]: "300ms" }}>
            {facts.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[110px_1fr] gap-4 py-4 border-b border-ink/20">
                <dt className="font-mono text-xs tracking-[0.18em] uppercase text-muted pt-1">{k}</dt>
                <dd className="font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
