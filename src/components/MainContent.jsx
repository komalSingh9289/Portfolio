import React from "react";
import KomalPdf from "../assets/images/komalSingh.pdf";
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
          <a href={KomalPdf} download="Komal_Resume.pdf">My Resume </a>
        </button>
      </div>
    </div>  
    </section>
  );
};

export default MainContent;
