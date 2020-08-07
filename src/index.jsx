import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import './index.scss';
import './assets/bootstrap.min.css';

import "core-js/stable";
import 'regenerator-runtime/runtime';
import AppHeader from './components/app-header';
import AppRendomBird from './components/app-rendom-bird';
import AppBirdList from './components/app-bird-list';
import AppBirdCard from './components/app-bird-card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        active: false,gi
        score: 3
        // activeGroup: 1
    };
  }

  render() {
    const { active, score } = this.state;
    const birdsGroup = [
        {groupName : 'Разминка', active: false,  id:1},
        {groupName: 'Воробьиные', active: false,  id:2},
        {groupName: 'Лесные птицы', active: false,  id:3},
        {groupName: 'Певчие птицы', active: true,  id:4},
        {groupName: 'Хищные птицы', active: false,  id:5},
        {groupName: 'Морские птицы', active: false,  id:6}
    ]
    return (
      <>
        <AppHeader  score={ score } birdsGroup={ birdsGroup }/>
        <AppRendomBird/>
          <div className="row mb2">
              <div className="col-md-6">
                  <AppBirdList/>
              </div>
              <div className="col-md-6">
                  <AppBirdCard/>
                  {active}
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
