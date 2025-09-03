import React from "react";

const ProjectList = () => {
  return (
    <div className="proj-container">
      {/* Bookstore Project */}
      <div className="project-card">
        <img src="bookstore.png" alt="Bookstore" />
        <div className="project-card-content">
          <h2>ONLINE BOOKSTORE</h2>
          <p>
            Developed a full-stack online bookstore platform that allows users
            to browse, search, and purchase books with integrated payment
            gateway.
          </p>
          <p className="techuse">
            REACT | NODEJS | EXPRESS | TAILWIND CSS | MONGODB | CASHFREE PAYMENT
            GATEWAY
          </p>
          <a
            href="https://gitlab.com/komalSingh9289/bookstore.git"
            className="view-source-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source Code
          </a>
        </div>
      </div>
      {/* E-commerce Project */}
      <div className="project-card">
        <img src="ecom.png" alt="Ecom" />
        <div className="project-card-content">
          <h2>ECOMMERCE [VOGUEVIBE]</h2>
          <p>
            Designed & Developed an e-commerce website tailored to women's
            fashion, focused on providing a seamless shopping experience for
            clothing, accessories, and bags, etc.
          </p>
          <p className="techuse">
            REACT | NODEJS | EXPRESS | TAILWIND CSS | MONGODB
          </p>
          <a
            href="https://github.com/komalSingh9289/Ecom-VogueVibe-.git"
            className="view-source-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source Code
          </a>
        </div>
      </div>

      {/* Expense Tracker Project */}
      <div className="project-card">
        <img src="ecom-site.png" alt="Expense Tracker" />
        <div className="project-card-content">
          <h2>EXPENSE TRACKER</h2>
          <p>
            A web application to manage personal finances effectively. Users can
            add, edit, and delete transactions, categorize expenses, search and
            filter records, and download reports to visualize their financial
            health. Fully responsive for desktop and mobile.
          </p>
          <p className="techuse">
            REACT | NODEJS | EXPRESS | TAILWIND CSS | MONGODB | JWT | RESTful
            API
          </p>
          <a
            href="https://github.com/komalSingh9289/Expense-Tracker"
            className="view-source-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source Code
          </a>
        </div>
      </div>

      {/* Blog CMS */}
      <div className="project-card">
        <img src="blog-cms.png" alt="Blog CMS" />
        <div className="project-card-content">
          <h2>Blog CMS</h2>
          <p>
            A dynamic platform for creating, editing, and managing blog posts
            with user authentication, category management, and comment
            moderation.
          </p>
          <p className="techuse">
            HTML | CSS | JavaScript | Bootstrap | PHP | MySQL
          </p>
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

      {/* Chat App */}
      <div className="project-card">
        <img src="chat-app.png" alt="Chat App" />
        <div className="project-card-content">
          <h2>Chat App</h2>
          <p>
            A real-time messaging platform using AJAX for seamless
            communication, featuring user authentication, chat rooms, and
            private messaging.
          </p>
          <p className="techuse">
            HTML | CSS | JavaScript | AJAX | PHP | MySQL
          </p>
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

        {/* Netflix Clone */}
      <div className="project-card">
        <img src="netflix.png" alt="Netflix" />
        <div className="project-card-content">
          <h2>Netflix Clone</h2>
          <p>
            A replica of Netflix's landing page featuring a sleek design with
            hero sections, promotional content, and responsive layout.
          </p>
          <p className="techuse">HTML | CSS | JavaScript</p>
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

      {/* ToDo App */}
      <div className="project-card">
        <img src="todo.png" alt="TODO App" />
        <div className="project-card-content">
          <h2>ToDo App</h2>
          <p>
            A simple task management tool allowing users to add, edit, and
            delete tasks with a friendly interface.
          </p>
          <p className="techuse">HTML | CSS | JavaScript | PHP | MySQL</p>
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

    

      {/* Rock Paper Scissor */}
      <div className="project-card">
        <img src="game.png" alt="Game" />
        <div className="project-card-content">
          <h2>Rock Paper Scissor</h2>
          <p>
            A classic game built with JavaScript that lets players compete
            against the computer, featuring intuitive controls and real-time
            results.
          </p>
          <p className="techuse">HTML | CSS | JavaScript</p>
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
    </div>
  );
};

export default ProjectList;
