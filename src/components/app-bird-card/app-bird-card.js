import React from 'react';
import PropTypes from 'prop-types';
import './app-bird-card.css';

const AppBirdCard = ({ bird, activeLevel }) => {

    if( { activeLevel } === true ){
          return (
              <div className="bird-details card">
                  <div className="card-body">
                      <img className="bird-image" src={ bird.image } alt="Ворон"/>
                      <ul className="list-group list-group-flush">
                          <li className="list-group-item"><h4>{ bird.name }</h4></li>
                          <li className="list-group-item"><span>{ bird.species }</span></li>
                          <li className="list-group-item">
                              <div className="audio-player">
                                  ****
                              </div>
                          </li>
                      </ul>
                  </div>
                  <span className="bird-description">{ bird.description }</span>
              </div>
          );
    }

    return (
            <div className="bird-details card">
                <p className="instruction">
                    <span>Послушайте плеер.</span>
                    <span>Выберите птицу из списка</span>
                </p>
            </div>
    )
};

AppBirdCard.propTypes = {
    activeLevel: PropTypes.bool.isRequired,
    bird:PropTypes.objectOf(PropTypes.any).isRequired
};

export default AppBirdCard;
