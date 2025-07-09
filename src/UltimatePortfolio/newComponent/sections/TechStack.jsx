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
  SiMysql,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import "../style/techStack.css";
import { DiPhotoshop } from "react-icons/di";
const TechStack = () => {
  return (
    <section id="tech">
      <div className="container">
        <SectionButton btnText="Tech Stack " />
        <div className="row justify-content-evenly pb-4">
          <span className=" common-logo-container col-lg-2 col-md-2 col-4">
            <SiHtml5 size={70} />
            <p>Html </p>
          </span>
          <span className=" common-logo-container col-lg-2 col-md-2 col-4">
            <SiCss3 size={70} />
            <p> Css</p>
          </span>
          <span className=" common-logo-container col-lg-2 col-md-2 col-4">
            <SiJavascript size={70} />
            <p>Javascript </p>
          </span>

          <span className=" common-logo-container col-lg-2 col-md-2 col-4">
            <SiBootstrap size={70} />
            <p> Bootstrap</p>
          </span>

          <span className="common-logo-container col-lg-2 col-md-2 col-4">
            {/* <SiCss3 size={70} />s */}
            <SiGitforwindows size={70} />
            <p>Git </p>
          </span>

          <span className="common-logo-container  text-align-center col-md-2 col-4">
            <span className="mx-auto">
              <SiReact size={70} />
              <p>React Js </p>
            </span>
          </span>

          <span className="common-logo-container  text-align-center col-md-2 col-4">
            <span className="mx-auto">
              <SiTailwindcss size={70} />
              <p>Tailwind </p>
            </span>
          </span>

          <span className="common-logo-container col-lg-2 col-md-2 col-4">
            <SiFigma size={70} />
            <p>Figma </p>
          </span>
          <span className="common-logo-container col-lg-2 col-md-2 col-4">
            <DiPhotoshop size={70} />
            <p>Photoshop</p>
          </span>

          <span className="common-logo-container col-lg-2 col-md-2 col-4">
            <SiNodedotjs size={70} />
            <p>Node </p>
          </span>

          {/* <span className=" common-logo-container col-lg-2 col-md-2 col-4">
            <SiExpress size={70} />
            <p> Express</p>
          </span> */}

          {/* <span className=" common-logo-container col-lg-2 col-md-2 col-4">
            <SiMongodb size={70} />
            <p> MongoDB</p>
          </span> */}

          <span className=" common-logo-container col-lg-2 col-md-2 col-4">
            <SiVuedotjs size={70} />
            <p>Vue js </p>
          </span>

          {/* <span className=" common-logo-container col-lg-2 col-md-2 col-4">
            <SiPython size={70} />
            <p>Python </p>
          </span> */}

          {/* <span className="common-logo-container col-lg-2 col-md-2 col-4">
            <SiPostgresql size={70} />
            <p>PGSQL </p>
          </span> */}

          {/* <span className=" common-logo-container col-lg-2 col-md-2 col-4">
            <SiMysql size={70} />
            <p> My Sql</p>
          </span> */}
          {/* <span className="common-logo-container col-lg-2 col-md-2 col-4">
            <SiFastapi size={70} />
            <p>Fastapi </p>
          </span> */}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
