import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <section>
      <div className="main-content">
        <div className="skill-content">
          <h1 className="title">SKILLS</h1>

          <div className="skills-wrap">
            <div className="skills">
              <FaHtml5 className="icons" />
              <span className="tooltiptext">HTML</span>
            </div>
            <div className="skills">
              <FaCss3Alt className="icons" />
              <span className="tooltiptext">CSS</span>
            </div>
            <div className="skills">
              <IoLogoJavascript className="icons" />
              <span className="tooltiptext">JavaScript</span>
            </div>
            <div className="skills">
              <FaPhp className="icons" />
              <span className="tooltiptext">PHP</span>
            </div>
            <div className="skills">
              <SiMysql className="icons" />
              <span className="tooltiptext">MySql</span>
            </div>
            <div className="skills">
              <FaReact className="icons" />
              <span className="tooltiptext">React</span>
            </div>
            <div className="skills">
              <FaWordpress className="icons" />
              <span className="tooltiptext">Wordpress</span>
            </div>
            <div className="skills">
              <FaBootstrap className="icons" />
              <span className="tooltiptext">Bootstrap</span>
            </div>
            <div className="skills">
              <FaNodeJs className="icons" />
              <span className="tooltiptext">NodeJS</span>
            </div>
            <div className="skills">
              <SiMongodb className="icons" />
              <span className="tooltiptext">MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
