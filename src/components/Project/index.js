import { LazyLoadImage } from 'react-lazy-load-image-component';
import React from "react";

function Project({ project }) {
  const { name, repo, link, description } = project;

  return (
      <div className="project" key={name}>
        {
          <LazyLoadImage
            src={require(`../../assets/projects/${name}.png`)}
            alt={name}
            className="project-bg"
          />
        }
        <div className="project-text">
          <h3>
            <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>{'\u00A0'}{'\u00A0'}
            <a href={repo} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </h3>
          <p>{description}</p>
        </div>
      </div>
  );
}

export default Project;