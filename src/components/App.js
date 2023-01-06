import React from 'react'
import {Route, Switch} from 'react-router-dom'
import MainHeader from './MainHeader'
import Game from './Game'

function App() {
  return (
    <div className="App">
      <MainHeader />
      <Switch>
        <Route exact path="/game">
          <Game />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
