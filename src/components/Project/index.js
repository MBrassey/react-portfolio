import { formatAndCapitalize } from "../../utils/helpers";
import React from "react";

function Project({ project }) {
  const { name, repo, link, description } = project;

  return (
    <div className="project" key={name}>
      {
        <img
          src={require(`../../assets/projects/${name}.png`)}
          alt={formatAndCapitalize(name)}
          className="project-bg"
        />
      }
      <div className="project-text">
        <h3>
          <a href={link}>{formatAndCapitalize(name)}</a>{" "}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
