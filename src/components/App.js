import React, {useEffect, useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import MainHeader from './MainHeader'
import DevMode from './DevMode'
import Game from './Game'
import '../App.css'

function App() {
  const [players, setPlayers] = useState()
  const [mobs, setMobs] = useState()

  useEffect(()=>{
    const link = process.env.REACT_APP_API_URL

    fetch(`${link + '/players'}`)
    .then(res => res.json())
    .then(playerData => setPlayers(playerData))

    fetch(`${link + '/mobs'}`)
    .then(res => res.json())
    .then(mobData => setMobs(mobData))
  }, [])
  
  return (
    <div className="App">
      <MainHeader />
      <Switch>
        <Route exact path="/game">
          <Game />
        </Route>
        <Route path='/dev'>
          <DevMode mobs={mobs} players={players}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
