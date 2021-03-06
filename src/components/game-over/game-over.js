import React from 'react';
import './game-over.css';
import PropTypes from "prop-types";
import woodpecker from './woodpecker.png';


const GameOver = ({ score, newGame }) => {

    if( score === 30){
        return (
            <div className="jumbotron game-over"><h1 className="display-3 text-center">Поздравляем!</h1><p
                className="lead text-center">Вы прошли викторину и набрали 30 из 30 возможных баллов</p>
                <hr className="my-4"/><img className="img-win" src={woodpecker} alt="win"/>
            </div>
        )
    }

    return (
        <div className="jumbotron game-over"><h1 className="display-3 text-center">Поздравляем!</h1><p
            className="lead text-center">Вы прошли викторину и набрали { score } из 30 возможных баллов</p>
            <hr className="my-4"/>
                <button type='button' onClick={() =>{ newGame() }} className="btn btn-next btn-game-over">Попробовать еще раз!</button>
        </div>
    )
};

GameOver.propTypes = {
    score:PropTypes.number.isRequired,
    newGame:PropTypes.func.isRequired,
};

export default GameOver;