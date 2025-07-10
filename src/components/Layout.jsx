import React from "react";
import Navbar from "./Navbar";
import Code from "./Code";
import ProfileImage from "./ProfileImage";
import VerticalLocation from "./VerticalLocation";
import SocialIcons from "./SocialIcons";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center gap-5">
        <ProfileImage />
        <Code />
      </div>
      <VerticalLocation />
      <SocialIcons />
      <About />

      <Skills />
      <Projects />
    </>
  );
};

export default Layout;
