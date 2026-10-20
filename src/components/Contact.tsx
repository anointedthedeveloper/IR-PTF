import { FormEvent, useState, type ReactNode } from "react";
import { initials, profile } from "../data/profile";
import { Arrow, LinkedIn, Mail, WhatsApp } from "./Icons";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full bg-transparent border-b border-paper/30 py-3 text-lg text-paper placeholder:text-paper/35 focus:border-clay outline-none transition";
const label = "font-mono text-[11px] tracking-[0.2em] uppercase text-paper/55";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const hasForm = Boolean(profile.web3formsKey || profile.email);
  const wa = profile.whatsapp.replace(/\D/g, "");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("botcheck")) return; // honeypot

    if (!profile.web3formsKey) {
      const subject = String(fd.get("subject") || "Hello from your portfolio");
      const body = `${fd.get("message")}\n\n— ${fd.get("name")} (${fd.get("email")})`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: profile.web3formsKey,
          from_name: "Portfolio contact form",
          name: fd.get("name"),
          email: fd.get("email"),
          subject: `Portfolio: ${fd.get("subject")}`,
          message: fd.get("message"),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const channels = [
    profile.email && { icon: <Mail className="w-5 h-5" />, name: "Email", value: profile.email, href: `mailto:${profile.email}` },
    wa && {
      icon: <WhatsApp className="w-5 h-5" />,
      name: "WhatsApp",
      value: "Message me",
      href: `https://wa.me/${wa}?text=${encodeURIComponent(`Hello ${profile.shortName.split(" ")[0]}, I found your portfolio and would like to connect.`)}`,
      ext: true,
    },
    profile.linkedin && { icon: <LinkedIn className="w-5 h-5" />, name: "LinkedIn", value: profile.shortName, href: profile.linkedin, ext: true },
  ].filter(Boolean) as { icon: ReactNode; name: string; value: string; href: string; ext?: boolean }[];

  return (
    <section id="contact" className="relative bg-forest text-paper px-6 md:px-12 lg:px-16 pt-14 md:pt-32 pb-10 overflow-hidden">
      <div className="absolute -bottom-24 -right-16 font-display italic text-[22rem] leading-none text-paper/[0.04] select-none" aria-hidden="true">
        {initials}
      </div>

      <div className="relative max-w-[1150px] mx-auto">
        <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-14 xl:gap-20">
          <div>
            <div className="reveal font-mono text-xs tracking-[0.22em] uppercase text-clay">06 — Contact</div>
            <h2 className="reveal font-display text-[clamp(3rem,7.5vw,6.5rem)] leading-[0.96] mt-4" style={{ ["--d" as string]: "60ms" }}>
              Let's find <em className="text-clay">common ground.</em>
            </h2>
            <p className="reveal mt-6 text-lg text-paper/70 max-w-lg leading-relaxed" style={{ ["--d" as string]: "120ms" }}>
              A graduate role, fellowship, research idea, or simply a conversation about diplomacy and peace? I'd love to hear from you.
            </p>

            {channels.length > 0 && (
              <ul className="reveal mt-10 space-y-3 max-w-md" style={{ ["--d" as string]: "180ms" }}>
                {channels.map((c) => (
                  <li key={c.name}>
                    <a
                      href={c.href}
                      {...(c.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-center gap-4 rounded-2xl border border-paper/20 px-5 py-4 hover:bg-paper hover:text-forest hover:border-paper transition"
                    >
                      <span className="w-11 h-11 rounded-full bg-paper/10 group-hover:bg-forest/10 flex items-center justify-center shrink-0">{c.icon}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[11px] tracking-[0.2em] uppercase opacity-60">{c.name}</span>
                        <span className="block font-semibold text-lg truncate">{c.value}</span>
                      </span>
                      <Arrow className="w-5 h-5 opacity-60 group-hover:translate-x-1 transition" />
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {profile.cvUrl && (
              <a href={profile.cvUrl} download className="reveal mt-6 inline-flex items-center gap-3 rounded-full bg-clay text-white px-7 py-4 font-semibold hover:brightness-110 transition">
                Download CV <Arrow className="w-5 h-5 rotate-90" />
              </a>
            )}
          </div>

          {hasForm ? (
            <form className="reveal space-y-7" style={{ ["--d" as string]: "120ms" }} onSubmit={onSubmit}>
              <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <label className="block">
                <span className={label}>Your name</span>
                <input required name="name" autoComplete="name" className={field} placeholder="Jane Doe" />
              </label>
              <label className="block">
                <span className={label}>Email</span>
                <input required type="email" name="email" autoComplete="email" className={field} placeholder="jane@organisation.org" />
              </label>
              <label className="block">
                <span className={label}>Subject</span>
                <input required name="subject" className={field} placeholder="Opportunity at our organisation" />
              </label>
              <label className="block">
                <span className={label}>Message</span>
                <textarea required name="message" rows={4} className={`${field} resize-none`} placeholder="Tell me a little about it…" />
              </label>
              <button
                disabled={status === "sending"}
                className={`group w-full inline-flex items-center justify-between rounded-full px-8 py-5 font-semibold text-lg transition disabled:opacity-60 ${
                  status === "sent" ? "bg-sage text-forest" : status === "error" ? "bg-clay text-white" : "bg-paper text-forest hover:bg-clay hover:text-white"
                }`}
              >
                {status === "sending" ? "Sending…" : status === "sent" ? "Message sent. Thank you!" : status === "error" ? "Couldn't send. Try again" : "Send message"}
                <Arrow className="w-6 h-6 group-hover:translate-x-1 transition" />
              </button>
              <p role="status" className="text-sm text-paper/55 min-h-5">
                {status === "sent" && "Your message is on its way. I'll reply as soon as I can."}
                {status === "error" && "Something went wrong. Please try again or use one of the links."}
              </p>
            </form>
          ) : (
            <div className="reveal self-start rounded-[28px] border border-paper/20 p-8 md:p-10">
              <div className="font-mono text-xs tracking-[0.2em] uppercase text-clay">Direct contact</div>
              <p className="font-display text-4xl leading-tight mt-4">Contact form coming soon.</p>
              <p className="mt-4 text-paper/65 leading-relaxed">Email and LinkedIn will appear here once they are added to the site.</p>
            </div>
          )}
        </div>

        <footer className="mt-20 pt-6 border-t border-paper/15 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-paper/55 text-center">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <a href="#top" className="font-mono text-xs tracking-[0.2em] uppercase hover:text-paper transition">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}
