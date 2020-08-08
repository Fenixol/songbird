import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import './index.scss';
import './assets/bootstrap.min.css';

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
        active: false,
        score: 0,
        scoreGroup: 5,
        group: 0,
        bird: this.rendBird(birdsData[0])
    };
  }

  onCheckBird = (id) => {
      const { bird, score, scoreGroup } = this.state;
      if(bird.id === id){
          this.setState({
              score: ( score + scoreGroup)
          })
      }else{
          this.setState({
              scoreGroup: scoreGroup - 1
          })
      }
  }

  rendBird = (birds) => {
      const randomBird = birds[Math.floor(Math.random() * 6)];
      this.setState({
          bird: randomBird
      });
      return randomBird;
  }

  render() {
    const { active, score, group, bird } = this.state;
    const randBirdsGroup = birdsData[group];
    const birdsGroup = [
        {groupName : 'Разминка', active: false,  id:1},
        {groupName: 'Воробьиные', active: false,  id:2},
        {groupName: 'Лесные птицы', active: false,  id:3},
        {groupName: 'Певчие птицы', active: true,  id:4},
        {groupName: 'Хищные птицы', active: false,  id:5},
        {groupName: 'Морские птицы', active: false,  id:6}
    ];

    return (
      <>
        <AppHeader
            score = { score }
            birdsGroup = { birdsGroup }
            group = { group }
        />
        <AppRendomBird bird={ bird}/>
          <div className="row mb2">
              <div className="col-md-6">
                  <AppBirdList  randBirdsGroup={randBirdsGroup} onCheckBird={this.onCheckBird}/>
              </div>
              <div className="col-md-6">
                  <AppBirdCard bird={bird} active={active}/>
              </div>
              <button  type='button' className="btn btn-next">Next Level</button>
          </div>
      </>
    );
  }
}


const AppWithHot = hot(module)(App);

const mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot />, mountNode);
