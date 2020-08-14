import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './app-bird-card.css';


export default class AppBirdCard extends Component{
    constructor(props) {
        super(props);
        this.playerRef = React.createRef();
    };

    render () {
        const {bird} = this.props;

        if( Object.keys(bird).length !== 0){
            return (
                <div className="bird-details card">
                    <div className="card-body">
                        <img className="bird-image" src={ bird.image } alt={ bird.name }/>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><h4>{ bird.name }</h4></li>
                            <li className="list-group-item"><span>{ bird.species }</span></li>
                            <li className="list-group-item">
                                <div className="audio-player">
                                    <AudioPlayer
                                        ref={this.playerRef}
                                        src={ bird.audio }
                                        autoPlay={false}
                                        autoPlayAfterSrcChange={false}
                                        showJumpControls={false}
                                        layout="horizontal-reverse"
                                        customAdditionalControls={[]}
                                        customProgressBarSection={
                                            [
                                                RHAP_UI.PROGRESS_BAR,
                                                RHAP_UI.CURRENT_TIME,
                                                RHAP_UI.DURATION,
                                            ]}
                                        customIcons={{
                                            play: <svg viewBox="-200 0 1200 1000"><path fill="#00bc8c" d="M96.51 11.97c-31.23 8.05-53.26 32.76-63.42 71.27-3.45 12.84-3.64 29.7-3.64 416.71s.19 403.87 3.64 416.71c16.09 60.74 61.69 86.03 120.9 67.25 9-2.87 53.65-25.1 116.49-58.24 56.14-29.51 221.29-116.3 367.28-192.93 145.99-76.64 271.29-143.31 278.38-148.1 39.28-25.68 59.59-63.04 53.26-97.52-4.79-26.63-24.33-53.07-52.88-71.65C892 399.37 172.58 22.32 154.95 16.38c-18.97-6.33-43.3-8.24-58.44-4.41z"/></svg>,
                                            pause: <svg viewBox="0 0 47.607 47.607"><path fill="#00bc8c" d="M17.991 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345zM42.877 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345z"/></svg>
                                        }}
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <span className="bird-description">{ bird.description }</span>
                </div>
            );
        }

        return (
            <div className="bird-details card">
                <p className="instruction">
                    <span>Послушайте плеер.</span>
                    <span>Выберите птицу из списка</span>
                </p>
            </div>
        )
    }

};

AppBirdCard.propTypes = {
    bird:PropTypes.objectOf(PropTypes.any).isRequired
};

