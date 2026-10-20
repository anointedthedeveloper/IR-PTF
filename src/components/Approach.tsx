import { profile } from "../data/profile";

export default function Approach() {
  return (
    <section id="approach" className="px-6 md:px-12 lg:px-16 py-20 md:py-32">
      <div className="max-w-[1150px] mx-auto">
        <div className="reveal max-w-3xl mb-12 md:mb-16">
          <div className="font-mono text-xs tracking-[0.22em] uppercase text-clay">03 — Approach</div>
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
      </div>
    </section>
  );
}
