import React from 'react';
import './app-bird-list.css';

const AppBirdList = () => {
  return (
      <ul className="item-list list-group">
          <li className="list-group-item"><span className="li-btn">1</span>Ворон</li>
          <li className="list-group-item"><span className="li-btn">2</span>Журавль</li>
          <li className="list-group-item"><span className="li-btn">3</span>Ласточка</li>
          <li className="list-group-item"><span className="li-btn">4</span>Козодой</li>
          <li className="list-group-item"><span className="li-btn">5</span>Кукушка</li>
          <li className="list-group-item"><span className="li-btn">6</span>Синица</li>
      </ul>
  );
};

export default AppBirdList;
