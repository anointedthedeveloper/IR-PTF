import About from "./components/About";
import Approach from "./components/Approach";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Focus from "./components/Focus";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Rail from "./components/Rail";
import WorldMap from "./components/WorldMap";
import { useReveal } from "./hooks";

export default function App() {
  useReveal();

  return (
    <>
      <a href="#focus" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-clay focus:text-white focus:px-4 focus:py-2 focus:rounded-full">
        Skip to content
      </a>
      <Rail />
      <main className="lg:pl-[290px] overflow-x-clip">
        <Hero />
        <Marquee />
        <Focus />
        <Experience />
        <WorldMap />
        <Approach />
        <About />
        <Contact />
      </main>
    </>
  );
}
