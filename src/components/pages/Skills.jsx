import { motion } from "framer-motion";

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
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg",
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
  { name: "MySQL", logo: "/mysql.png" },
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
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold  mb-6">🚀 Skills and Technologies</h2>
      <p className="text-gray-500 mb-8">
        Using a combination of cutting-edge technologies and open-source tools.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mx-[10%] bg-gray-100">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center bg-white shadow-md rounded-xl py-3 px-6 w-[50%] cursor-pointer"
            initial={{ opacity: 0, y: 50 }} // Start Position
            whileInView={{ opacity: 1, y: [30, -10, 0] }} // Smooth Up-Down Effect
            whileHover={{ scale: 1.1 }} // Hover par zoom effect
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <img src={skill.logo} alt={skill.name} className="w-8 h-8 mr-2" />
            <span className="font-semibold">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
