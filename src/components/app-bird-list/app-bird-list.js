import React from 'react';
import PropTypes from 'prop-types';
import AppBirdListItem from '../app-bird-list-item'
import './app-bird-list.css';

const AppBirdList = ( {randBirdsGroup, onCheckBird, group, activeLevel} ) =>{

    const birdsList  = randBirdsGroup.map(( item ) =>{
        return (
            <AppBirdListItem
                onCheckBird={onCheckBird}
                key={ item.id }
                id={item.id}
                name={item.name}
                group={ group }
                activeLevel = { activeLevel }
            />
        )
    });

    return (
        <ul className="item-list list-group">
            { birdsList }
        </ul>
    )

};

AppBirdList.propTypes = {
    onCheckBird:PropTypes.func.isRequired,
    group:PropTypes.number.isRequired,
    activeLevel:PropTypes.bool.isRequired,
    randBirdsGroup: PropTypes.arrayOf(
        PropTypes.object).isRequired
};

export default AppBirdList;