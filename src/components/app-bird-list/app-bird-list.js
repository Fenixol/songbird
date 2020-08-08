import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './app-bird-list.css';

export default class AppBirdList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    };

    render () {
        const { active } = this.state;
        const { randBirdsGroup, onCheckBird }   = this.props;
        const birdsList  = randBirdsGroup.map(( item ) =>{
            const classNames = 'list-group-item';

            return (
                <li className={ classNames } onClick={ () =>{onCheckBird(item.id)} } role='presentation' key={ item.id }>
                    <span className="li-btn"/>
                    { item.name }{active}
                </li>
            )
        });

        return (
            <ul className="item-list list-group">
                { birdsList }
            </ul>
        )
    }
};

AppBirdList.propTypes = {
    onCheckBird:PropTypes.func.isRequired,
    randBirdsGroup: PropTypes.arrayOf(
        PropTypes.object).isRequired
};

