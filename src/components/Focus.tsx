import { useState } from "react";
import { profile } from "../data/profile";
import { Plus } from "./Icons";

export default function Focus() {
  const [open, setOpen] = useState(0);

  return (
    <section id="focus" className="px-6 md:px-12 lg:px-16 py-20 md:py-32">
      <div className="max-w-[1150px] mx-auto">
        <div className="reveal grid xl:grid-cols-[1fr_1.1fr] gap-6 xl:gap-16 items-end mb-12 md:mb-16">
          <div>
            <div className="font-mono text-xs tracking-[0.22em] uppercase text-clay">01 — Specialization</div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.98] mt-4">Where I focus</h2>
          </div>
          <p className="text-lg text-muted leading-relaxed">
            Three connected areas that shape how I study the world: how states talk, how deals get made, and how peace is kept.
          </p>
        </div>

        <ul className="border-t border-ink/20">
          {profile.specializations.map((s, i) => {
            const isOpen = open === i;
            return (
              <li key={s.title} className="reveal border-b border-ink/20" style={{ ["--d" as string]: `${i * 90}ms` }}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`focus-${i}`}
                  className="w-full flex items-center gap-4 md:gap-8 py-7 md:py-9 text-left group"
                >
                  <span className="font-mono text-sm text-muted w-8 shrink-0">0{i + 1}</span>
                  <span className={`font-display text-[clamp(2rem,5.5vw,4.5rem)] leading-none flex-1 transition-colors ${isOpen ? "text-clay" : "group-hover:text-forest-soft"}`}>
                    {s.title}
                  </span>
                  <span className={`w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full border border-ink/25 flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-clay border-clay text-white rotate-45" : "group-hover:bg-ink group-hover:text-paper"}`}>
                    <Plus className="w-5 h-5" />
                  </span>
                </button>

                <div
                  id={`focus-${i}`}
                  role="region"
                  className={`grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-9 md:pl-16 grid md:grid-cols-[1.2fr_1fr] gap-6 md:gap-12">
                      <p className="text-lg text-ink/80 leading-relaxed">{s.body}</p>
                      <ul className="flex flex-wrap content-start gap-2">
                        {s.topics.map((t) => (
                          <li key={t} className="font-mono text-xs tracking-wide rounded-full border border-forest/30 bg-paper-deep px-4 py-2 text-forest">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
