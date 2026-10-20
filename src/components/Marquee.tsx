import { profile } from "../data/profile";

export default function Marquee() {
  const words = [...profile.peace, ...profile.peace];
  return (
    <section className="bg-forest text-paper py-6 overflow-hidden" aria-label="The word peace in many languages">
      <div className="marquee">
        {[0, 1].map((n) => (
          <div key={n} className="flex shrink-0 items-center" aria-hidden={n === 1}>
            {words.map((w, i) => (
              <span key={`${w}-${i}`} className="flex items-center">
                <span className="font-display italic text-4xl md:text-6xl px-8 md:px-12">{w}</span>
                <span className="text-clay text-2xl">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
