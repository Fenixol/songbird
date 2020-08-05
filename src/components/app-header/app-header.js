import React from 'react';
import './app-header.css';

const AppHeader = () => {
  return (
      <div className="header d-flex">
          <div className="top-panel d-flex">
              <div className="logo"/>
              <h5>Score: <span className="score">0</span></h5>
          </div>
          <ul className="pagination">
              <li className="page-item active"><a className="page-link" href="/#">Разминка</a></li>
              <li className="page-item"><a className="page-link" href="/#">Воробьиные</a></li>
              <li className="page-item"><a className="page-link" href="/#">Лесные птицы</a></li>
              <li className="page-item"><a className="page-link" href="/#">Певчие птицы</a></li>
              <li className="page-item"><a className="page-link" href="/#">Хищные птицы</a></li>
              <li className="page-item"><a className="page-link" href="/#">Морские птицы</a></li>
          </ul>
      </div>
  );
};

export default AppHeader;
