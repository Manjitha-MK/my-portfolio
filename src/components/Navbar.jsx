// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const links = ["home", "about", "projects", "skills", "contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-xl font-bold text-indigo-600">Manjitha.dev</h1>
        </div>

        {/* Center - Navigation Links (Desktop) */}
        <ul className="hidden md:flex flex-1 justify-center space-x-6">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={link}
                smooth
                duration={500}
                onClick={closeMenu}
                className="text-gray-700 hover:text-indigo-600 cursor-pointer capitalize"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right - Login button (Desktop) */}
        <div className="hidden md:flex">
          <button className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md transition duration-300">
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link}
              to={link}
              smooth
              duration={500}
              onClick={closeMenu}
              className="block text-gray-700 hover:text-indigo-600 capitalize cursor-pointer"
            >
              {link}
            </Link>
          ))}
          <button
            onClick={closeMenu}
            className="block w-full text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md transition duration-300"
          >
            Login
          </button>
        </div>
      )}
    </header>
  );
}
