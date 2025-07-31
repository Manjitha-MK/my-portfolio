import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse  lg:flex-row justify-center items-center min-h-screen bg-[#1f1f1f] text-white px-4 text-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-[4px] mb-4">
          Hey, I'm Manjitha 👋
        </h1>
        <h2 className="text-xl md:text-2xl text-indigo-400 mb-6">
          <Typewriter
            words={["Frontend Developer", "React Developer", "Tailwind Expert"]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <Link
          to="projects"
          className="px-6 py-3 text-sm tracking-[2px] cursor-pointer bg-indigo-600 hover:bg-indigo-700 rounded-lg mt-4"
        >
          View Projects
        </Link>
      </div>
      <div>
        <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-[4px] mb-4">
          Hey, I'm Manjitha 👋
        </h1>
        <h2 className="text-xl md:text-2xl text-indigo-400 mb-6">
          <Typewriter
            words={["Frontend Developer", "React Developer", "Tailwind Expert"]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
      </div>
    </section>
  );
}
