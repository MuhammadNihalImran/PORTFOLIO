import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

const skills = [
  {
    name: "React",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    name: "Javascript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Express",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
  },
  {
    name: "NodeJS",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "Mongo DB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
  },
  {
    name: "C/C++",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "Postman",
    logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
  },
  {
    name: "Redux",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  },
  {
    name: "Firebase",
    logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
  },
  {
    name: "Github",
    logo: "https://www.svgrepo.com/show/512317/github-142.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://www.svgrepo.com/show/512317/github-142.svg",
  },
];

const Skills = () => {
  const { theme } = useTheme();
  const changetheme = theme === "dark" ? "text-white" : "text-gray-600";

  return (
    <div id="skills" className="text-center px-4 py-8 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 dark:text-white">
        🚀 Skills and Technologies
      </h2>
      <p
        className={`${changetheme} mb-6 md:mb-8 text-base md:text-lg px-2 text-bold`}
      >
        Using a combination of cutting-edge technologies and open-source tools.
      </p>

      {/* Skills Container */}
      <div className="rounded-xl p-4 md:p-6 mx-auto max-w-6xl dark:bg-black">
        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700 rounded-xl py-2 md:py-3 px-3 md:px-6 w-full mx-auto cursor-pointer hover:shadow-lg dark:hover:shadow-gray-600 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }} // Start Position
              whileInView={{ opacity: 1, y: [30, -10, 0] }} // Smooth Up-Down Effect
              whileHover={{ scale: 1.05 }} // Hover zoom effect
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mr-2 md:mr-3"
              />
              <span className="font-semibold text-gray-800 dark:text-white text-sm md:text-base lg:text-lg">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
