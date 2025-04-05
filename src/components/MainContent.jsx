import React from "react";
import komalresume from "../assets/images/komalresume.pdf";
const MainContent = () => {
  return (
    <section className="main-section">
    <div className="main-content">
      <div className="content">
        <h1>Komal Singh | Web Developer</h1>
        <p>
          Building Future-Ready Web Solutions with Code, Creativity, and a
          User-Centric Approach
        </p>
        <button className="btn">
          <a href={komalresume} download="Komal_Resume.pdf">My Resume </a>
        </button>
      </div>
    </div>  
    </section>
  );
};

export default MainContent;
