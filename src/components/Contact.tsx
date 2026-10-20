import { FormEvent } from "react";
import { initials, profile } from "../data/profile";
import { Arrow, LinkedIn, Mail } from "./Icons";

export default function Contact() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = String(fd.get("subject") || "Hello from your portfolio");
    const body = `${fd.get("message")}\n\n— ${fd.get("name")} (${fd.get("email")})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const field = "w-full bg-transparent border-b border-paper/30 py-3 text-lg text-paper placeholder:text-paper/35 focus:border-clay outline-none transition";

  return (
    <section id="contact" className="relative bg-forest text-paper px-6 md:px-12 lg:px-16 pt-20 md:pt-32 pb-10 overflow-hidden">
      <div className="absolute -bottom-24 -right-16 font-display italic text-[22rem] leading-none text-paper/[0.04] select-none" aria-hidden="true">
        {initials}
      </div>

      <div className="relative max-w-[1150px] mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20">
          <div>
            <div className="reveal font-mono text-xs tracking-[0.22em] uppercase text-clay">05 — Contact</div>
            <h2 className="reveal font-display text-[clamp(3rem,7.5vw,6.5rem)] leading-[0.96] mt-4" style={{ ["--d" as string]: "60ms" }}>
              Let's find <em className="text-clay">common ground.</em>
            </h2>
            <p className="reveal mt-6 text-lg text-paper/70 max-w-lg leading-relaxed" style={{ ["--d" as string]: "120ms" }}>
              Internship, fellowship, research idea or just a conversation about diplomacy and peace? I'd love to hear from you.
            </p>

            <div className="reveal mt-10 flex flex-wrap gap-3" style={{ ["--d" as string]: "180ms" }}>
              <a href={`mailto:${profile.email}`} className="group inline-flex items-center gap-3 rounded-full bg-clay text-white px-7 py-4 font-semibold hover:brightness-110 transition">
                <Mail className="w-5 h-5" /> {profile.email}
              </a>
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full border border-paper/30 px-7 py-4 font-semibold hover:bg-paper hover:text-forest transition">
                  <LinkedIn className="w-5 h-5" /> LinkedIn
                </a>
              )}
            </div>
          </div>

          <form className="reveal space-y-7" style={{ ["--d" as string]: "120ms" }} onSubmit={onSubmit}>
            <label className="block">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-paper/55">Your name</span>
              <input required name="name" autoComplete="name" className={field} placeholder="Jane Doe" />
            </label>
            <label className="block">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-paper/55">Email</span>
              <input required type="email" name="email" autoComplete="email" className={field} placeholder="jane@organisation.org" />
            </label>
            <label className="block">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-paper/55">Subject</span>
              <input required name="subject" className={field} placeholder="Internship opportunity" />
            </label>
            <label className="block">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-paper/55">Message</span>
              <textarea required name="message" rows={4} className={`${field} resize-none`} placeholder="Tell me a little about it…" />
            </label>
            <button className="group w-full inline-flex items-center justify-between rounded-full bg-paper text-forest px-8 py-5 font-semibold text-lg hover:bg-clay hover:text-white transition">
              Send message <Arrow className="w-6 h-6 group-hover:translate-x-1 transition" />
            </button>
          </form>
        </div>

        <footer className="mt-20 pt-6 border-t border-paper/15 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-paper/55 text-center">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <a href="#top" className="font-mono text-xs tracking-[0.2em] uppercase hover:text-paper transition">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}
