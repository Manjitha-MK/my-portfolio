import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Manjitha 👋</h1>
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
      <a href="#projects" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg mt-4">
        View Projects
      </a>
    </section>
  );
}