import { useState } from "react";
import { initials, nav, profile } from "../data/profile";
import { useActiveSection, useScrollProgress } from "../hooks";
import { LinkedIn, Mail, WhatsApp } from "./Icons";

const ids = nav.map((n) => n.id);

export default function Rail() {
  const active = useActiveSection(ids);
  const progress = useScrollProgress();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop rail */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-[290px] bg-forest text-paper flex-col justify-between p-9 z-40">
        <div>
          <a href="#top" className="flex items-center gap-3 group" aria-label="Back to top">
            <img src="/images/avatar.jpg" alt="" width={48} height={48} className="w-12 h-12 rounded-full object-cover object-top ring-2 ring-paper/30 group-hover:ring-clay transition" />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-paper/65 leading-snug">
              Professional<br />Portfolio
            </span>
          </a>

          <div className="mt-14">
            <div className="font-display text-[2.6rem] leading-[1.02]">
              {profile.name.split(" ").map((w, i) => (
                <span key={w} className={`block ${i === 1 ? "italic text-sage" : ""}`}>{w}</span>
              ))}
            </div>
            <div className="mt-4 font-mono text-[11px] tracking-[0.18em] uppercase text-paper/60">{profile.role}</div>
          </div>

          <nav className="mt-14 relative" aria-label="Sections">
            <div className="absolute left-[7px] top-1 bottom-1 w-px bg-paper/15" aria-hidden="true" />
            <div
              className="absolute left-[7px] top-1 w-px bg-clay origin-top"
              style={{ height: "calc(100% - 8px)", transform: `scaleY(${progress})` }}
              aria-hidden="true"
            />
            <ul className="space-y-5">
              {nav.map((n, i) => {
                const on = active === n.id;
                return (
                  <li key={n.id}>
                    <a href={`#${n.id}`} aria-current={on ? "true" : undefined} className="flex items-center gap-5 group">
                      <span className={`relative z-10 w-[15px] h-[15px] rounded-full border transition ${on ? "bg-clay border-clay scale-110" : "bg-forest border-paper/40 group-hover:border-paper"}`} />
                      <span className="font-mono text-[11px] text-paper/45">0{i + 1}</span>
                      <span className={`text-lg transition ${on ? "text-paper" : "text-paper/60 group-hover:text-paper"}`}>{n.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3 text-sm text-paper/75">
            <span className="w-2.5 h-2.5 rounded-full bg-clay pulse-dot" />
            Open to {profile.openTo[0].toLowerCase()} &amp; more
          </div>
          <div className="flex items-center gap-3">
            {profile.email && (
              <a href={`mailto:${profile.email}`} aria-label="Email" className="w-11 h-11 rounded-full border border-paper/25 flex items-center justify-center hover:bg-paper hover:text-forest transition">
                <Mail className="w-5 h-5" />
              </a>
            )}

            {profile.whatsapp && (
              <a href={`https://wa.me/${profile.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-11 h-11 rounded-full border border-paper/25 flex items-center justify-center hover:bg-paper hover:text-forest transition">
                <WhatsApp className="w-5 h-5" />
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-11 h-11 rounded-full border border-paper/25 flex items-center justify-center hover:bg-paper hover:text-forest transition">
                <LinkedIn className="w-5 h-5" />
              </a>
            )}
          </div>
          <a href="#contact" className="inline-block text-sm font-semibold underline underline-offset-4 decoration-paper/30 hover:decoration-clay transition">Get in touch</a>
        </div>
      </aside>

      {/* Mobile bar */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-50">
        <div className="absolute top-0 left-0 h-[3px] bg-clay origin-left w-full" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
        <div className="flex items-center justify-between px-5 h-16 bg-forest/95 backdrop-blur text-paper">
          <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <img src="/images/avatar.jpg" alt="" width={36} height={36} className="w-9 h-9 rounded-full object-cover object-top ring-2 ring-paper/30" />
            <span className="font-display text-2xl">{profile.shortName}</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="w-11 h-11 rounded-full border border-paper/25 flex flex-col items-center justify-center gap-[5px]"
          >
            <span className={`block w-5 h-px bg-paper transition ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`block w-5 h-px bg-paper transition ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>
        {open && (
          <nav className="bg-forest text-paper px-6 pb-8 pt-4 h-[calc(100svh-4rem)] flex flex-col justify-between" aria-label="Sections">
            <ul className="divide-y divide-paper/15">
              {nav.map((n, i) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} onClick={() => setOpen(false)} className="flex items-baseline gap-4 py-5">
                    <span className="font-mono text-xs text-paper/45">0{i + 1}</span>
                    <span className="font-display text-4xl">{n.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" onClick={() => setOpen(false)} className="block text-center rounded-full bg-clay text-white py-4 font-semibold">
              Get in touch
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
