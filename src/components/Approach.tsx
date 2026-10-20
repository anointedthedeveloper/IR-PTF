import { profile } from "../data/profile";
import { ToolIcon } from "./Icons";

export default function Approach() {
  return (
    <section id="approach" className="px-6 md:px-12 lg:px-16 py-20 md:py-32">
      <div className="max-w-[1150px] mx-auto">
        <div className="reveal max-w-3xl mb-12 md:mb-16">
          <div className="font-mono text-xs tracking-[0.22em] uppercase text-clay">04 — Approach</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.98] mt-4">
            How I think about <em className="text-clay">common ground</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {profile.principles.map((p, i) => (
            <article
              key={p.title}
              className="reveal group relative rounded-[28px] bg-forest text-paper p-8 md:p-9 min-h-[250px] md:min-h-[340px] flex flex-col justify-between overflow-hidden hover:-translate-y-2 transition-transform duration-500"
              style={{ ["--d" as string]: `${i * 110}ms` }}
            >
              <div className="absolute -top-6 -right-2 font-display italic text-[11rem] leading-none text-paper/[0.06] select-none" aria-hidden="true">
                {i + 1}
              </div>
              <div className="font-mono text-xs tracking-[0.2em] uppercase text-sage">Principle 0{i + 1}</div>
              <div>
                <h3 className="font-display text-4xl md:text-[2.6rem] leading-[1.02]">{p.title}</h3>
                <p className="mt-4 text-paper/75 leading-relaxed">{p.body}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-clay group-hover:w-full transition-all duration-700" />
            </article>
          ))}
        </div>

        <div className="mt-20 md:mt-28">
          <div className="reveal flex items-end justify-between gap-6 mb-8">
            <h3 className="font-display text-4xl md:text-6xl leading-[1]">What I bring <em className="text-clay">to the table</em></h3>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/15 border border-ink/15 rounded-[24px] overflow-hidden">
            {profile.toolkit.map((t, i) => (
              <li key={t.title} className="reveal bg-paper p-7 md:p-8 flex gap-5 hover:bg-paper-deep transition-colors" style={{ ["--d" as string]: `${(i % 3) * 80}ms` }}>
                <span className="w-12 h-12 shrink-0 rounded-2xl bg-forest text-sage flex items-center justify-center">
                  <ToolIcon name={t.icon} className="w-6 h-6" />
                </span>
                <div>
                  <div className="font-semibold text-lg leading-tight">{t.title}</div>
                  <p className="mt-1.5 text-muted leading-snug">{t.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
