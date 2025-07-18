// src/components/About.jsx
export default function About() {
  const skills = [
    "Java",
    "C#",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "express",
    "GIT",
    "Github",
  ];
  return (
    <div className="bg-white text-gray-800 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[35px] font-bold text-center font-serif tracking-[5px]">ABOUT ME</h2>
        <div className="w-10 h-1 bg-purple-600 mx-auto mt-2 mb-6 rounded"></div>
        <p className="text-lg leading-relaxed text-center text-gray-700 font-serif tracking[2px]">
          I'm a passionate front-end developer with a strong foundation in
          React, Tailwind CSS, and responsive design. I enjoy building beautiful
          and functional user interfaces, and I always strive to learn and grow
          with new technologies.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-x-[160px] gap-y-10 mt-6 py-6 px-4 sm:px-6 md:px-10 lg:px-20 justify-center">
        <div className="w-full md:w-1/2 bg-amber-0">
          <h1 className="text-2xl text-black font-bold mb-4 ">
            Get to know me!
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700">
            I'm a Frontend Focused Web Developer building and managing the
            Front-end of Websites and Web Applications that leads to the success
            of the overall product. Check out some of my work in the Projects
            section.
          </p>
          <p className="mt-[10px] text-gray-700">
            I also like sharing content related to the stuff that I have learned
            over the years in Web Development so it can help other people of the
            Dev Community. Feel free to Connect or Follow me on my Linkedin and
            Instagram where I post useful content related to Web Development and
            Programming
          </p>
          <p className="mt-[10px] text-gray-700">
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
          <div className="md:flex">
            <a href="#contact">
              <button className="text-white text-center mt-10 cursor-pointer bg-indigo-600 px-4 py-2 rounded-md animate-bounce transition duration-700">
                CONTACT
              </button>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-6 text-black">My Skills</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
