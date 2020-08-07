import React, {Component} from 'react';
import './app-bird-list.css';

export default class AppBirdList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activeGroup: false
        };
    };

    onPageItemClick = () => {
        this.setState(({activeGroup}) => {
            return {
                activeGroup: !activeGroup
            };
        });
    };

    render () {
        const { activeGroup } = this.state;
        let classNames = 'list-group-item';
        if (activeGroup) {
            classNames += ' active';
        }
        return (
            <ul className="item-list list-group">
                <li className={ classNames } onClick={this.onPageItemClick} role='presentation'><span className="li-btn"/>Ворон</li>
                <li className="list-group-item"><span className="li-btn"/>Журавль</li>
                <li className="list-group-item"><span className="li-btn"/>Ласточка</li>
                <li className="list-group-item"><span className="li-btn"/>Козодой</li>
                <li className="list-group-item"><span className="li-btn"/>Кукушка</li>
                <li className="list-group-item"><span className="li-btn"/>Синица</li>
            </ul>
        )
    }
};

