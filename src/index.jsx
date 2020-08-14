import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import './assets/bootstrap.min.css';
import './index.scss';
import "core-js/stable";
import 'regenerator-runtime/runtime';
import Favicon from 'react-favicon';
import birdsData from './birds';
import AppHeader from './components/app-header';
import AppRendBird from './components/app-rendom-bird';
import AppBirdList from './components/app-bird-list';
import AppBirdCard from './components/app-bird-card';
import GameOver from './components/game-over';
import winSong from '../public/media/win.a1e9e8b6.mp3';
import errorSong from '../public/media/error.165166d5.mp3';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        activeLevel: false,
        score: 0,
        scoreGroup: 5,
        group: 0,
        bird: (birdsData[0])[Math.floor(Math.random() * 5)],
        currentBird: {},
        over: false,
        checkBirdsArr: []
    };
  }

  onCheckBird = (id) => {
      const { bird, score, scoreGroup, activeLevel, checkBirdsArr } = this.state;
      const winBird = new Audio(winSong);
      const errorBird = new Audio(errorSong);
      const clickBird =  checkBirdsArr.findIndex((el) => el === id);

      if(clickBird === -1){
          this.setState(()=>{
              const newArr = checkBirdsArr.slice();
              return {
                  checkBirdsArr: newArr
              }
          })

          if(bird.id === id){
              if(!activeLevel){
                  this.setState({
                      score: ( score + scoreGroup),
                      scoreGroup: 5,
                      activeLevel: true,
                      currentBird: this.findBird(id),
                  })
                  winBird.play();
              }
          }else{
              if(!activeLevel){
                  errorBird.play();
              }
              this.setState({
                  scoreGroup: scoreGroup - 1,
                  currentBird: this.findBird(id)
              })

              return false;
          }
          return true;
      }

      this.setState({
          currentBird: this.findBird(id)
      })
      return false;

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
              bird: this.rendBird(birdsData[group + 1]),
              group: group + 1,
              activeLevel: false,
              currentBird: {},
              checkBirdsArr: []
          });
      } if (group === 5){
          this.setState({
              over: true,
              checkBirdsArr: []
          });
      }
  }

  newGame = () => {
      this.setState({
          activeLevel: false,
          score: 0,
          scoreGroup: 5,
          group: 0,
          bird: this.rendBird(birdsData[0]),
          currentBird: {},
          over: false,
          checkBirdsArr: []
      });
  }

  rendBird = (birds) => {
      const randomBird = birds[Math.floor(Math.random() * 5)];
      this.setState({
          bird: randomBird
      });
      return randomBird;
  }

  render() {
    const { activeLevel, score, group, bird, currentBird, over } = this.state;
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

    if(over){
        return (
            <>
                <Favicon url="./favicon.ico"/>
                <AppHeader
                    score = { score }
                    birdsGroup = { birdsGroup }
                    group = { group }
                />

                <GameOver
                    score = { score }
                    newGame = { this.newGame }
                />
            </>
        )
    }

    return (
      <>
        <Favicon url="./favicon.ico"/>
        <AppHeader
            score = { score }
            birdsGroup = { birdsGroup }
            group = { group }
        />

        <AppRendBird
            bird={ bird }
            activeLevel={ activeLevel }
        />
        <div className="row mb2">
              <div className="col-md-6">
                  <AppBirdList
                      randBirdsGroup={randBirdsGroup}
                      onCheckBird={this.onCheckBird}
                      group={ group }
                      activeLevel = { activeLevel }
                  />
              </div>
              <div className="col-md-6">
                  <AppBirdCard
                      bird={ currentBird }
                  />
              </div>
              <button
                  type='button' onClick={() =>{this.onNextLevel()}}
                  className={classNames}>Next Level
              </button>
        </div>
      </>

    );
  }
}


const AppWithHot = hot(module)(App);


const mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot />, mountNode);
