// src/components/Projects.jsx
export default function Projects() {
  return (
    <div className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {["Portfolio Site", "E-commerce", "Blog Platform"].map((title, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-600">
                Description of {title} project with key features.
              </p>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-indigo-600 hover:underline mr-4"
                >
                  Demo
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:underline"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
