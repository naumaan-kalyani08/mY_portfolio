import React from "react";
import { SectionButton } from "../components/ReusableComponents";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiVuedotjs,
  SiNodedotjs,
  SiFigma,
  SiGitforwindows,
  SiFastapi,
  SiPostgresql,
  SiPython,
} from "react-icons/si";
import "../style/techStack.css";
import { DiPhotoshop } from "react-icons/di";
const TechStack = () => {
  return (
    <section>
      <div className="container">
        <SectionButton btnText="Tech Stack " />
        <div className="row justify-content-evenly ">
          <span className="common-logo-container  text-align-center col-md-2 col-4">
            <span className="mx-auto">
              <SiReact size={100} />
              <p>React Js </p>
            </span>
          </span>
          <span className="common-logo-container  text-align-center col-md-2 col-4">
            <span className="mx-auto">
              <SiTailwindcss size={100} />
              <p>Tailwind </p>
            </span>
          </span>
          <span className="common-logo-container col-md-2 col-4">
            <SiFigma size={100} />
            <p>Figma </p>
          </span>
          <span className="common-logo-container col-md-2 col-4">
            <DiPhotoshop size={100} />
            <p>Photoshop</p>
          </span>
          <span className="common-logo-container col-md-2 col-4">
            {/* <SiCss3 size={100} />s */}
            <SiGitforwindows size={100} />
            <p>Git </p>
          </span>
          <span className="common-logo-container col-md-2 col-4">
            <SiFastapi size={100} />
            <p>Fastapi </p>
          </span>
          <span className="common-logo-container col-md-2 col-4">
            <SiNodedotjs size={100} />
            <p>Node </p>
          </span>
          <span className="common-logo-container col-md-2 col-4">
            <SiPostgresql size={100} />
            <p>PGSQL </p>
          </span>
          <span className=" common-logo-container col-md-2 col-4">
            <SiVuedotjs size={100} />
            <p>Vue js </p>
          </span>
          <span className=" common-logo-container col-md-2 col-4">
            <SiBootstrap size={100} />
            <p> Bootstrap</p>
          </span>
          <span className=" common-logo-container col-md-2 col-4">
            <SiHtml5 size={100} />
            <p>Html </p>
          </span>
          <span className=" common-logo-container col-md-2 col-4">
            <SiCss3 size={100} />
            <p> Css</p>
          </span>
          <span className=" common-logo-container col-md-2 col-4">
            <SiJavascript size={100} />
            <p>Javascript </p>
          </span>
          <span className=" common-logo-container col-md-2 col-4">
            <SiPython size={100} />
            <p>Python </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
