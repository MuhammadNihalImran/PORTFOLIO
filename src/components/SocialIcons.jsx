import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6"; // Gmail Icon Added

const SocialIcons = () => {
  return (
    <div className="flex flex-col items-center gap-4 fixed left-5 mr-2 bottom-[-10%] transform -translate-y-1/2">
      {/* GitHub */}
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:-translate-y-1 transition-transform duration-300"
      >
        <FaGithub className="w-12 h-12 text-black" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:-translate-y-1 transition-transform duration-300"
      >
        <FaLinkedin className="w-12 h-12 text-black" />
      </a>

      {/* Twitter (X) */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:-translate-y-1 transition-transform duration-300"
      >
        <FaXTwitter className="w-12 h-12 text-black" />
      </a>

      {/* Gmail */}
      <a
        href="mailto:your-email@gmail.com" // Replace with your email
        className="hover:-translate-y-1 transition-transform duration-300"
      >
        <FaEnvelope className="w-12 h-12 text-black" /> {/* Gmail Icon */}
      </a>
    </div>
  );
};

export default SocialIcons;
