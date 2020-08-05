import React from 'react';
import './app-bird-card.css';

import birdImage from './bird.jpg';

const AppBirdCard = () => {
  return (
      <div className="bird-details card">
          <p className="instruction d-none">
              <span>Послушайте плеер.</span><span>Выберите птицу из списка</span>
          </p>
          <div className="card-body">
              <img className="bird-image" src={birdImage} alt="Ворон"/>
              <ul className="list-group list-group-flush">
                  <li className="list-group-item"><h4>Ворон</h4></li>
                  <li className="list-group-item"><span>Corvus corax</span></li>
                  <li className="list-group-item">
                      <div className="audio-player">
                          ***
                      </div>
                  </li>
              </ul>
          </div>
          <span className="bird-description">Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.</span>
      </div>
  );
};

export default AppBirdCard;
