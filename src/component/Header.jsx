import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CONTACT", href: "#contact" },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId.replace("#", ""));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white ">
      <nav className="flex items-center justify-between py-8 px-6 md:px-12 lg:px-20 xl:px-60">
        {/* LOGO */}
        <a
          href="#home"
          className="text-gray-800 font-bold text-2xl md:text-3xl cursor-pointer hover:text-black transition"
        >
          WIBISONO
        </a>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <a
                href={item.href}
                className="text-gray-600 font-semibold text-lg transition group-hover:text-black after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 group-hover:after:w-full"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 text-2xl z-50"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Navbar */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 text-xl transition-transform duration-300 md:hidden ${toggle ? "translate-x-0" : "translate-x-full"}`}
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-gray-800 font-semibold hover:text-black text-2xl"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.href);
              setToggle(false);
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
