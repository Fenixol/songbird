import React from 'react';
import PropTypes from 'prop-types';
import './app-header.css';

const AppHeader = ({ score , birdsGroup, group }) => {
    const groupBirdsList = birdsGroup.map(( item ) =>{
        let classNames = 'page-item';
        if (item.id === group) {
            classNames += ' active';
        }
        return (
            <li className={ classNames } key={ item.id }>
                <a className="page-link" href="/#">{ item.groupName }</a>
            </li>
        )
    });

  return (
      <div className="header d-flex">
          <div className="top-panel d-flex">
              <div className="logo"/>
              <h5>Score: <span className="score">{ score }</span></h5>
          </div>
          <ul className="pagination">
              { groupBirdsList }
          </ul>
      </div>
  );
};

AppHeader.propTypes = {
    score:PropTypes.number.isRequired,
    group:PropTypes.number.isRequired,
    birdsGroup:PropTypes.arrayOf(PropTypes.object).isRequired
};


export default AppHeader;

