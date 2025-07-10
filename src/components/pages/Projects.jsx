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

  return (
    <section className="container mx-auto text-center py-10">
      <h2 className="text-4xl font-bold">Projects</h2>
      <p className="text-gray-600">Check out some of my work</p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8 mx-[15%]">
        {initialProjects
          .slice(0, showAll ? initialProjects.length : 4)
          .map((project) => (
            <div
              key={project.id}
              className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div
                  className="relative p-8 group transition-transform duration-500"
                  style={{ backgroundColor: project.bgColor }}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-all duration-500">
                    <Eye className="text-white text-4xl drop-shadow-lg" />
                  </div>
                </div>
              </a>

              <div>
                <div className="flex items-center justify-between px-5">
                  <h3 className="text-lg font-semibold mt-2">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 view"
                  >
                    <p className="text-sm text-gray-500 transition-all duration-300 group-hover:underline">
                      View Project
                    </p>
                    <i
                      className="fa fa-external-link h-4 w-4 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>

                {project.tags?.length > 0 && (
                  <div className="flex items-center p-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-500 text-white text-xs py-1 px-4 mr-2 mt-2"
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
        className="mt-6 px-6 py-3 bg-[#15803D] text-white rounded-full hover:bg-[#1E6A3F] cursor-pointer transition-all duration-500"
      >
        {showAll ? "SHOW LESS" : "SEE ALL PROJECTS"}
      </button>
    </section>
  );
};

export default Projects;
