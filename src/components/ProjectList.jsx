import React from "react";

const ProjectList = () => {
  return (
    <div className="proj-container">
      <div className="project-card">
        <img src="blog-cms.png" alt="Blog CMS" />
        <div className="project-card-content">
          <h2>Blog CMS</h2>
          <p>
            A dynamic platform for creating, editing, and managing blog posts
            with user authentication, category management, and comment
            moderation.
          </p>
          <p className="techuse"> HTML| CSS | JavaScript | BootStrap |  PHP | MySQL </p>
          <a
            href="https://github.com/komalSingh9289/blog-cms.git"
            className="view-source-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source Code
          </a>
        </div>
      </div>
      <div className="project-card">
        <img src="chat-app.png" alt="Chat App" />
        <div className="project-card-content">
          <h2>Chat App</h2>
          <p>
            A real-time messaging platform using AJAX for seamless
            communication, featuring user authentication, chat rooms, and
            private messaging.
          </p>
          <p className="techuse"> HTML| CSS | JavaScript | AJAX |  PHP | MySQL </p>
          <a
            href="https://github.com/komalSingh9289/chat-app.git"
            className="view-source-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source Code
          </a>
        </div>
      </div>
      <div className="project-card">
        <img src="todo-list.png" alt="TODO App" />
        <div className="project-card-content">
          <h2>ToDo App</h2>
          <p>
            A simple task management tool with organized manner allowing users
            to add, edit, and delete tasks with a friendly interface.
          </p>
          <p className="techuse"> HTML| CSS | JavaScript |  PHP | MySQL </p>
          <a
            href="https://github.com/komalSingh9289/todo-list.git"
            className="view-source-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source Code
          </a>
        </div>
      </div>
      <div className="project-card">
        <img src="netflix.png" alt="Netflix" />
        <div className="project-card-content">
          <h2>Netflix Clone</h2>
          <p>
            A replica of Netflix's landing page featuring a sleek design with
            hero sections, promotional content, and responsive layout. Ideal for
            showcasing skills in HTML, CSS, and JavaScript.
          </p>
          <p className="techuse"> HTML| CSS | JavaScript </p>
          <a
            href="https://github.com/komalSingh9289/Netflix-clone.git"
            className="view-source-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source Code
          </a>
        </div>
      </div>
      <div className="project-card">
        <img src="game.png" alt="Game" />
        <div className="project-card-content">
          <h2>Rock Paper Scissor</h2>
          <p>
            A classic game built with JavaScript that lets players compete
            against the computer, featuring intuitive controls and real-time
            results.
          </p>
          <p className="techuse"> HTML| CSS | JavaScript  </p>
          <a
            href="https://github.com/komalSingh9289/Rock-Paper-Scissor.git"
            className="view-source-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source Code
          </a>
        </div>
      </div>
      <div className="project-card">
        <img src="calculator.png" alt="Calculator" />
        <div className="project-card-content">
          <h2>Calculator</h2>
          <p>
            A functional and interactive calculator application for performing
            basic arithmetic operations with a user-friendly interface.
          </p>
          <p className="techuse"> HTML| CSS | JavaScript </p>
           <a
            href="https://github.com/komalSingh9289/Basic-Calculator-using-JS.git"
            className="view-source-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
