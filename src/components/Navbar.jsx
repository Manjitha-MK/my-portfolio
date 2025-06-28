// src/components/Navbar.jsx
import { Link } from "react-scroll";

const links = ["home", "about", "projects", "skills", "contact"];

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">Manjitha.dev</h1>
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={link}
                smooth
                duration={500}
                className="text-gray-700 hover:text-indigo-600 cursor-pointer capitalize"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
