import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import NSLogo from "./NSLogo";
import { useTheme } from "./ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full ${
        theme === "dark" ? "bg-[#1F2937]" : "bg-white"
      } shadow-md z-50 transition-all duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container flex items-center justify-between py-4 px-4">
        <NSLogo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-xl">
          <a
            href="#about"
            className={`${
              theme === "dark" ? "text-white" : "text-gray-800"
            } hover:text-[#4305ba] dark:hover:text-[#4305ba] transition-colors`}
          >
            About
          </a>
          <a
            href="#skills"
            className={`${
              theme === "dark" ? "text-white" : "text-gray-800"
            } hover:text-[#4305ba] dark:hover:text-[#4305ba] transition-colors`}
          >
            Skills
          </a>
          <a
            href="#work"
            className={`${
              theme === "dark" ? "text-white" : "text-gray-800"
            } hover:text-[#4305ba] dark:hover:text-[#4305ba] transition-colors`}
          >
            Work
          </a>
          <a
            href="#contact"
            className={`${
              theme === "dark" ? "text-white" : "text-gray-800"
            } hover:text-[#4305ba] dark:hover:text-[#4305ba] transition-colors`}
          >
            Contact
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`cursor-pointer text-indigo-800 dark:text-indigo-400 ${
              theme === "dark" ? "bg-[#1F2937]" : "bg-white"
            }  hover:text-white hover:bg-indigo-800 dark:hover:bg-indigo-600 rounded-2xl border-2 border-dashed border-indigo-800 dark:border-indigo-400 bg-white dark:bg-gray-800 px-4 py-2 font-semibold uppercase text-black dark:text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] dark:hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none`}
          >
            RESUME
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X
                className={`h-6 w-6 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                } `}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                } `}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <nav className="container px-4 py-4 space-y-4">
            <a
              href="#about"
              className="block text-gray-800 dark:text-gray-200 hover:text-[#4305ba] dark:hover:text-[#4305ba] transition-colors text-lg font-medium"
              onClick={closeMobileMenu}
            >
              About
            </a>
            <a
              href="#skills"
              className="block text-gray-800 dark:text-gray-200 hover:text-[#4305ba] dark:hover:text-[#4305ba] transition-colors text-lg font-medium"
              onClick={closeMobileMenu}
            >
              Skills
            </a>
            <a
              href="#work"
              className="block text-gray-800 dark:text-gray-200 hover:text-[#4305ba] dark:hover:text-[#4305ba] transition-colors text-lg font-medium"
              onClick={closeMobileMenu}
            >
              Work
            </a>
            <a
              href="#contact"
              className="block text-gray-800 dark:text-gray-200 hover:text-[#4305ba] dark:hover:text-[#4305ba] transition-colors text-lg font-medium"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
            <button className="w-full cursor-pointer text-indigo-800 dark:text-indigo-400 hover:text-white hover:bg-indigo-800 dark:hover:bg-indigo-600 rounded-2xl border-2 border-dashed border-indigo-800 dark:border-indigo-400 bg-white dark:bg-gray-800 px-4 py-3 font-semibold uppercase text-black dark:text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] dark:hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
