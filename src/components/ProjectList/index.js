import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    {
      name: 'financial-tracker',
      category: 'full-stack',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'wavSwap',
      category: 'component',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'counter.js',
      category: 'gist',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'web3 wallet',
      category: 'blockchain',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
  ]);

  const currentProjects = projects.filter((project) => project.category === category);

  const toggleModal = (image, i) => {
    setCurrentProject({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && <Modal onClose={toggleModal} currentProject={currentProject} />}
      <div className="flex-row">
        {currentProjects.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
