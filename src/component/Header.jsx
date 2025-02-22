import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaUserTie, FaProjectDiagram } from "react-icons/fa";
import { useDarkMode } from "../hooks/useDarkMode";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const { theme, toggleTheme } = useDarkMode();

  const navItems = [
    { label: "Home", to: "/", icon: <FaHome className="w-6 h-6" /> },
    { label: "About", to: "/about", icon: <FaUserTie className="w-6 h-6" /> },
    { label: "Project", to: "/projectlist", icon: <FaProjectDiagram className="w-6 h-6" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(currentScrollPos < prevScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    setToggle(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <header
        className={`fixed top-[1rem] left-1/2 z-50 transform -translate-x-1/2 bg-white dark:bg-gray-900 shadow-xl rounded-full px-6 py-3 flex items-center justify-between transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-20"
        } hidden md:flex`}
      >
        <div className="relative">
          <div
            className="absolute -top-1 left-0 h-full bg-gray-200 rounded-full transition-all duration-300"
            style={{
              width: "100px",
              transform: `translateX(${(hoverIndex !== null ? hoverIndex : activeIndex) * 124.5}px)`,
            }}
          ></div>

          <ul className="flex space-x-4">
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  to={item.to}
                  className="relative z-10 text-gray-600 font-semibold text-lg px-6 py-3 transition group-hover:text-black"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white flex items-center justify-center w-10 h-10"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </ul>
        </div>
      </header>

      {/* Mobile Navbar */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-black shadow-lg z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "translate-y-20"
        } md:hidden`}
      >
        <button
          className="fixed bottom-5 right-5 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg z-50"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <FaTimes className="text-black text-2xl" /> : <FaBars className="text-black text-2xl" />}
        </button>

        <div
          className={`fixed bottom-20 right-5 flex flex-col space-y-3 transition-all duration-300 ${
            toggle ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="w-12 h-12 bg-white dark:bg-gray-900 border border-gray-200 rounded-full flex items-center justify-center shadow-lg"
              onClick={() => handleItemClick(index)}
            >
              {item.icon}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-black flex items-center justify-center w-10 h-10"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;