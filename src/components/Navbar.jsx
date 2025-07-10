import { useState, useEffect } from "react";
import { Sun } from "lucide-react";
import NSLogo from "./NSLogo";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Scroll down → Hide Navbar
      } else {
        setShowNavbar(true); // Scroll up → Show Navbar
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <NSLogo />
        <nav className="hidden xl:flex items-center space-x-8 text-xl">
          <a href="#about" className="hover:text-[#4305ba]">
            About
          </a>
          <a href="#skills" className="hover:text-[#4305ba]">
            Skills
          </a>
          <a href="#work" className="hover:text-[#4305ba]">
            Work
          </a>
          <a href="#contact" className="hover:text-[#4305ba]">
            Contact
          </a>

          <button className="cursor-pointer  text-indigo-800 hover:text-white hover:bg-indigo-800 rounded-2xl border-2 border-dashed border-indigo-800 bg-white px-4 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            RESUME
          </button>

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <Sun className="h-5 w-5" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
