import React from "react";

export default function Projects() {
  return (
    <div>
      <h3 className="subjectTitle">Projects</h3>
      <p>JPEdgar.com (in progress)</p>
      <img src="https://picsum.photos/200/300" alt="placeholder"></img>
      <p>
        JPEdgar.com is my author website. This project was designed initially
        with templates from webs.com, but I've been working on redesigning this
        project from scratch.
      </p>
      <p>
        This project utilizes front-end and back-end development with
        authentication for blog control.
      </p>
      <p>
        Technologies used: React written in Javascript, React Router, React
        Bootstrap, Bootstrap Social, JSON server, font-awesome, editor.js, and
        Firebase.
      </p>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/JPEdgar/JPEdgar.com.git"
        className="fab fa-github"
        style={{ fontSize: "1.2rem" }}
      >
        GitHub
      </a>
    </div>
  );
}
