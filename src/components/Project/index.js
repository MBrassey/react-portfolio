

import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Project({ project }) {

  const { name, repo, link, description } = project;

  return (
    <div className="project" key={name}>
      { <img
        src={require(`../../assets/small/blockchain/0.jpg`)}
        alt={capitalizeFirstLetter(name)}
        className="project-bg"
      />}
      <div className="project-text">
        <h3>
          <a href={link}>{capitalizeFirstLetter(name)}</a>{' '}
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
