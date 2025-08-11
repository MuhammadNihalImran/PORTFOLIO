import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

const About = () => {
  const fullText = `Hey there! 👋 I'm Nihal Sheikh, a passionate MERN stack developer who loves building dynamic and user-friendly web apps. From frontend magic with React to powerful backend APIs with Node.js and MongoDB — I enjoy every part of the development process. I'm always exploring new technologies, sharpening my skills, and pushing myself to create better and smarter digital experiences. 🚀`;

  const [displayedText, setDisplayedText] = useState("");
  const { theme } = useTheme();
  const changetheme = theme === "dark" ? "text-white" : "text-gray-700";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 20); // typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="container mx-auto px-4 py-8 md:py-16 text-center"
    >
      <motion.h2
        className={`text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold mb-4 md:mb-6 dark:text-white`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        About Me
      </motion.h2>

      <p
        className={`text-lg md:text-xl font-semibold  ${changetheme} max-w-2xl md:max-w-3xl mx-auto leading-relaxed whitespace-pre-wrap px-2`}
      >
        {displayedText}
      </p>
    </section>
  );
};

export default About;
