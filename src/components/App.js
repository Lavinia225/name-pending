import React from 'react'
import {Route, Switch} from 'react-router-dom'
import MainHeader from './MainHeader'
import DevMode from './DevMode'
import Game from './Game'
import '../App.css'

function App() {
  return (
    <div className="App">
      <MainHeader />
      <Switch>
        <Route exact path="/game">
          <Game />
        </Route>
        <Route path='/dev'>
          <DevMode />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
