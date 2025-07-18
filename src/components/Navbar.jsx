// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX, FiLogIn } from "react-icons/fi";

const links = ["home", "about", "projects", "contact"];

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
          <h1 className="text-sm tracking-[2px] font-bold text-black">MANJITHA.dev</h1>
        </div>

        {/* Center - Navigation Links (Desktop) */}
        <ul className="hidden md:flex flex-1 justify-center space-x-[45px]">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={link}
                onClick={closeMenu}
                className="text-gray-500 text-sm tracking-[2px] font-bold hover:text-indigo-600 cursor-pointer uppercase"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right - Login button (Desktop) */}
        <div className="hidden md:flex">
          <FiLogIn
            className="text-gray-600 hover:text-indigo-700 cursor-pointer"
            size={24}
            title="Login"
          />
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
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
              className="block text-gray-700 tracking-[2px] text-sm hover:text-indigo-600 uppercase cursor-pointer"
            >
              {link}
            </Link>
          ))}
          <div className="w-full flex">
            <FiLogIn
              className="text-gray-600 hover:text-indigo-700 cursor-pointer"
              size={24}
              title="Login"
            />
          </div>
        </div>
      )}
    </header>
  );
}
