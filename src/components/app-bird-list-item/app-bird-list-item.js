import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './app-bird-list-item.css';

export default class AppBirdListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            active: false
        };
    };

    componentDidUpdate(previousProps) {
        // Typical usage (don't forget to compare props):
        const { group } = this.props;
        if ( group !== previousProps.group ) {
            this.updateDate()
        }
    }

    updateDate = () =>{
        this.setState(() => ({
            clicked: false,
            active: false
        }));
    }

    onCheckBird = (id) => {
        const { onCheckBird}   = this.props;
        if(onCheckBird(id)){
            this.setState(() => ({
                clicked: true,
                active: true
            }));
        }else{
            this.setState(() => ({
                clicked: true,
                active: false
            }));
        }
    }

    render () {
        const { clicked, active } = this.state;
        const { name, id}   = this.props;
        let classNames = 'list-group-item';

        if(clicked){
            if(active){
                classNames += ' success';
            }else{
                classNames += ' error';
            }

        }else{
            classNames = 'list-group-item';
        }

        return (
            <li className={ classNames } onClick={() =>{this.onCheckBird(id)}  } role='presentation' key={ id }>
                <span className="li-btn"/>
                { name }
            </li>
        )
    }
};

AppBirdListItem.propTypes = {
    onCheckBird:PropTypes.func.isRequired,
    id:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    group:PropTypes.number.isRequired
};

