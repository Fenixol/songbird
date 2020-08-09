import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import './assets/bootstrap.min.css';
import './index.scss';

import "core-js/stable";
import 'regenerator-runtime/runtime';
import birdsData from './birds';
import AppHeader from './components/app-header';
import AppRendomBird from './components/app-rendom-bird';
import AppBirdList from './components/app-bird-list';
import AppBirdCard from './components/app-bird-card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        activeLevel: false,
        score: 0,
        scoreGroup: 5,
        group: 0,
        bird: this.rendBird(birdsData[0]),
        currentBird: {}
    };
  }

  onCheckBird = (id) => {
      const { bird, score, scoreGroup } = this.state;
      if(bird.id === id){
          this.setState({
              score: ( score + scoreGroup),
              scoreGroup: 5,
              activeLevel: true
          })
      }else{
          this.setState({
              scoreGroup: scoreGroup - 1,
              currentBird: this.findBird(id)
          })
      }
  }

  findBird = (id) => {
      const { group } = this.state;
      const currentBird = birdsData[group].find((element) => {
          return element.id === id;
      })
      return currentBird
  }

  onNextLevel = () => {
      const { group, activeLevel } = this.state;
      if( group < 5 && activeLevel === true){
          this.setState({
              group: group + 1,
              activeLevel: false,
              currentBird: {}
          });
      }
  }

  rendBird = (birds) => {
      const randomBird = birds[Math.floor(Math.random() * 5)];
      this.setState({
          bird: randomBird
      });
      return randomBird;
  }

  render() {
    const { activeLevel, score, group, bird, currentBird } = this.state;
    const randBirdsGroup = birdsData[group];
    const birdsGroup = [
        {groupName: 'Разминка',  id:0},
        {groupName: 'Воробьиные', id:1},
        {groupName: 'Лесные птицы', id:2},
        {groupName: 'Певчие птицы', id:3},
        {groupName: 'Хищные птицы', id:4},
        {groupName: 'Морские птицы', id:5}
    ];

    let classNames = 'btn';
    if(activeLevel){
        classNames += ' btn-next'
    }

    return (
      <>
        <AppHeader
            score = { score }
            birdsGroup = { birdsGroup }
            group = { group }
        />
        <AppRendomBird bird={ bird }/>
        <div className="row mb2">
              <div className="col-md-6">
                  <AppBirdList  randBirdsGroup={randBirdsGroup} onCheckBird={this.onCheckBird}/>
              </div>
              <div className="col-md-6">
                  <AppBirdCard bird={ currentBird } activeLevel={ activeLevel }/>
              </div>
              <button  type='button' onClick={() =>{this.onNextLevel()}} className={classNames}>Next Level</button>
        </div>
      </>
    );
  }
}


const AppWithHot = hot(module)(App);

const mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot />, mountNode);
