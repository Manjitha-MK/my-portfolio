// src/components/Skills.jsx
export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git", "MongoDB"];

  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
