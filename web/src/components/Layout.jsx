import Navbar from "./Navbar";
import Code from "./Code";
import ProfileImage from "./ProfileImage";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./ThemeContext";
import Socialicons from "./SocialIcons";
import VerticalLine from "./VerticalLocation";

const Layout = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <div className="pt-20">
        {/* Hero Section - Responsive Layout */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 px-4 py-8 lg:py-16">
          <ProfileImage />
          <Code />
        </div>
        {/* Show only on medium screens and above */}
        <div className="hidden md:block">
          <Socialicons />
          <VerticalLine />
        </div>
        {/* Main Content Sections */}
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
