import React from "react";

const About = () => {
  return (
    <section>
      <div className="main-content">
        <div className="about-content">
          <h1 className="title">About Me</h1>

          <div className="content--text">
            <ul>
              <li>
                <h3>2025 - Present</h3>
                <p>
                  Currently pursuing MCA to strengthen my knowledge in computer
                  applications and software development.
                  <br />
                  Completed a 6-month internship as a MERN Stack Developer,
                  gaining hands-on experience in real-world projects.
                  <br />
                  Actively looking for opportunities to apply my skills and grow
                  as a developer.
                </p>
              </li>
              <li>
                <h3>2024</h3>
                <p>
                  Graduated with a Bachelor of Computer Applications (BCA) from
                  IGNOU.
                  <br />
                  Built a solid foundation in programming, web development, and
                  databases.
                </p>
              </li>
              <li>
                <h3>2022-2023</h3>
                <p>
                  Started my journey as a web developer, learning HTML, CSS, and
                  JavaScript.
                  <br />
                  Completed a Full Stack Web Development course and worked on
                  various projects.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
