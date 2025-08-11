import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6"; // Gmail Icon Added
import { useTheme } from "./ThemeContext";

const SocialIcons = () => {
  // Common styles
  const { theme } = useTheme();
  const changetheme = theme === "dark" ? "text-white" : "text-black";
  const commonIconStyle = `w-12 h-12  ${changetheme} transition-colors duration-300`;

  return (
    <div className="flex flex-col items-center gap-4 fixed left-5 mr-2 bottom-[0.1%] transform -translate-y-1/2 transition-colors duration-300 dark:text-white">
      {/* GitHub */}
      <a
        href="https://github.com/MuhammadNihalImran"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:-translate-y-1 transition-transform duration-300"
      >
        <FaGithub className={commonIconStyle} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/muhammad-nihal-sheikh-bb15b828a/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:-translate-y-1 transition-transform duration-300"
      >
        <FaLinkedin className={commonIconStyle} />
      </a>

      {/* Twitter (X) */}
      <a
        href="https://x.com/WMuhammdnihal"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:-translate-y-1 transition-transform duration-300"
      >
        <FaXTwitter className={commonIconStyle} />
      </a>

      {/* Gmail */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=wok.muhammadnihal@gmail.com&su=Portfolio Contact&body=Hi Nihal, I saw your portfolio and would like to connect!"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:-translate-y-1 transition-transform duration-300"
      >
        <FaEnvelope className={commonIconStyle} />
      </a>
    </div>
  );
};

export default SocialIcons;
