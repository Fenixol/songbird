import React from 'react';
import './app-rendom-bird.css';

import birdImage from './bird.jpg';

const AppRendomBird = () => {
  return (
      <div className="random-bird jumbotron rounded">
          <img className="bird-image" src={birdImage} alt="bird"/>
          <div>
              <ul className="list-group list-group-flush">
                  <li className="list-group-item"><h3>******</h3></li>
                  <li className="list-group-item">***
                  </li>
              </ul>
          </div>
      </div>
  );
};

export default AppRendomBird;
