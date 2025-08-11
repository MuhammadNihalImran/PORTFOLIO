import { useState } from "react";
import { Eye } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import recipeimg from "../../assets/images/recipe.png";
import searchimg from "../../assets/images/search.png";
import todoimg from "../../assets/images/todo.png";
import birthdayimg from "../../assets/images/birthday.png";
import digitalimg from "../../assets/images/digital.png";
import studioimg from "../../assets/images/studio.png";
import multiFromimg from "../../assets/images/multiform.png";
import expenseimg from "../../assets/images/expanse.png";
import { useTheme } from "../ThemeContext";

const initialProjects = [
  {
    id: 1,
    title: "Recipe-Web All Curd Functionality",
    img: recipeimg,
    tags: ["React", "Mongodb", "Express", "Nodejs", "REST-API"],
    bgColor: "#FFE0E0",
    link: "https://frontend-recipe.netlify.app/",
  },
  {
    id: 2,
    title: "Search-Image",
    img: searchimg,
    tags: ["unsplash-Api", "HTML", "CSS", "Javascript"],
    bgColor: "#E0FFE0",
    link: "https://muhammadnihalimran.github.io/Search-Images-App/",
  },
  {
    id: 3,
    title: "Todo-Web",
    img: todoimg,
    tags: ["React", "Tailwind-css", "REST-API"],
    bgColor: "#FFE0E0",
    link: "https://todoappfromreact.netlify.app/",
  },
  {
    id: 4,
    title: "Birthday-Calculator",
    img: birthdayimg,
    tags: ["HTML", "Javascript", "css"],
    bgColor: "#E0E0FF",
    link: "https://muhammadnihalimran.github.io/Birthday-calculator/",
  },
  {
    id: 5,
    title: "This is digital",
    img: digitalimg,
    tags: ["HTML", "CSS", "Javascript"],
    bgColor: "#FFE0FF",
    link: "https://muhammadnihalimran.github.io/website-this-is-digital/",
  },
  {
    id: 6,
    title: "Sundown Studio",
    img: studioimg,
    tags: ["HTML", "CSS", "Javascript"],
    bgColor: "#E0FFE0",
    link: "https://muhammadnihalimran.github.io/sundownstudio/",
  },
  {
    id: 7,
    title: "Multi step Form",
    img: multiFromimg,
    tags: ["React", "Tailwind-css"],
    bgColor: "#FFE0E0",
    link: "https://muhammadnihalimran.github.io/MULTI_STEP_FORM/",
  },
  {
    id: 8,
    title: "Expense Tracker",
    img: expenseimg,
    tags: ["React", "Tailwind-css"],
    bgColor: "#E0E0FF",
    link: "https://muhammadnihalimran.github.io/expenseTracker/",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const { theme } = useTheme();
  const changetheme = theme === "dark" ? "text-white" : "text-gray-600";

  return (
    <section
      id="work"
      className="container mx-auto text-center py-8 md:py-10 px-4"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-2 md:mb-4">
        Projects
      </h2>
      <p
        className={`text-lg md:text-xl font-semibold ${changetheme}  mb-6 md:mb-8`}
      >
        Check out some of my work
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8 max-w-6xl mx-auto">
        {initialProjects
          .slice(0, showAll ? initialProjects.length : 4)
          .map((project) => (
            <div
              key={project.id}
              className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div
                  className="relative p-4 md:p-8 group transition-transform duration-500"
                  style={{ backgroundColor: project.bgColor }}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-all duration-500">
                    <Eye className="text-white text-2xl md:text-4xl drop-shadow-lg" />
                  </div>
                </div>
              </a>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-3 md:px-5 py-2 md:py-3">
                  <h3 className="text-lg md:text-xl font-bold mt-2 dark:text-white mb-2 sm:mb-0">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 view"
                  >
                    <p className="text-sm md:text-base font-semibold text-gray-500 dark:text-white transition-all duration-300 group-hover:underline">
                      View Project
                    </p>
                    <i
                      className="fa fa-external-link h-3 w-3 md:h-4 md:w-4 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>

                {project.tags?.length > 0 && (
                  <div className="flex items-center p-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-500 text-white text-xs py-1 px-2 md:px-4 mr-1 md:mr-2 mt-1 md:mt-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>

      {/* See All Projects Button */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-6 md:mt-8 px-4 md:px-6 py-2 md:py-3 bg-[#15803D] text-white rounded-full hover:bg-[#1E6A3F] cursor-pointer transition-all duration-500 text-sm md:text-base"
      >
        {showAll ? "SHOW LESS" : "SEE ALL PROJECTS"}
      </button>
    </section>
  );
};

export default Projects;
