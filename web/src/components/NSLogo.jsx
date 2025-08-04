import { useTheme } from "./ThemeContext";

const NSLogo = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`flex items-center justify-center ${
        theme === "dark" ? "bg-[#1F2937]" : "bg-white"
      }   transition-colors duration-300`}
    >
      <h1 className="text-3xl sm:text-6xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 dark:from-yellow-400 dark:to-pink-500 drop-shadow-lg transition-colors duration-300">
        <span className="text-red-500 dark:text-yellow-400 transition-colors duration-300">
          &lt;
        </span>{" "}
        N.S{" "}
        <span className="text-purple-500 dark:text-pink-500 transition-colors duration-300">
          /&gt;
        </span>
      </h1>
    </div>
  );
};

export default NSLogo;
