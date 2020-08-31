import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AppBirdListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            active: false
        };
    };

    componentDidUpdate(previousProps) {
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
        const { onCheckBird, activeLevel}   = this.props;
        if(onCheckBird(id) && !activeLevel){
            this.setState(() => ({
                clicked: true,
                active: true
            }));

        }else if(!activeLevel) {
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
    group:PropTypes.number.isRequired,
    activeLevel:PropTypes.bool.isRequired
};

