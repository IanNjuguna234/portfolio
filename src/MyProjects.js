import React from 'react';
import './Projects.css'; 
import image from './founderImage.jpg';
import map from './un-members.png';
import leaf from './leaf.png';

function MyProjects() {
  return (
    <div className="my-projects">
      <h2>Our Projects</h2>
      <p>
        I'm proud to showcase some of the exciting projects I've worked on or are currently in progress. Here's a brief overview:
      </p>
      <div className="project-grid">
        <div className="project-frame">
        <div className="image-container">
          <img src={image} alt="Regional Programme Database" />
          <h3>Regional Programme Database</h3>
          <p>
            A platform designed to facilitate information management, coordination, data collection from UN-Habitat's regional and country activities. The database serves as a central hub for gathering and processing data from the field.
          </p>
          <a href="https://staging.urbanagendaplatform.org/home" target="_blank" rel="noopener noreferrer">
            Visit the site
          </a>
          </div>
        </div>
        <div className="project-frame">
        <div className="image-container">
          <img src={leaf} alt="Chaimuka Tea Application" />
          <h3>Chaimuka Tea Application</h3>
          <p>
            A tea application that integrates machine learning in detecting tea diseases when you take or scan an image of a tea leaf/plant.
          </p>
          {/* Add a link to the application or a demo if available */}
        </div>
        </div>
        <div className="project-frame">
        <div className="image-container">
          <img src={map} alt="Global Map of UN Habitat Offices" />
          <h3>Global Map of UN Habitat Offices</h3>
          <p>
            An interactive map that shows the various offices of the UN Habitat across the world in various countries.
          </p>
          <a href="https://staging.urbanagendaplatform.org/globalpresence" target="_blank" rel="noopener noreferrer">
            Show the presence
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;