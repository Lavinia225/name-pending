import React, {useEffect, useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import MainHeader from './MainHeader'
import DevMode from './DevMode'
import Game from './Game'
import Home from './Home'
import '../App.css'

function App() {
  const [players, setPlayers] = useState()
  const [mobs, setMobs] = useState()
  const [errors, setErrors] = useState([])

  useEffect(()=>{
    const link = process.env.REACT_APP_API_URL

    fetch(`${link + '/players'}`)
    .then(res => res.json())
    .then(playerData => setPlayers(playerData)).catch(()=>setErrors(["Failed to fetch data."]))

    fetch(`${link + '/mobs'}`)
    .then(res => res.json())
    .then(mobData => setMobs(mobData)).catch(()=>setErrors(["Failed to fetch data."]))
  }, [])

  const cardStyle = document.createElement('link')
  cardStyle.rel = 'stylesheet'
  cardStyle.href = 'https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css'
  document.querySelector('body').id = 'body'
  document.head.append(cardStyle)

  function updateEntities(entity, isMob, updating){
    if (updating){
      if (isMob){
        setMobs(mobs.map(entityChecker))
      }
      else{
        setPlayers(players.map(entityChecker))
      }
    }
    else{
      if (isMob){
        setMobs([...mobs, entity])
      }
      else{
        setPlayers([...players, entity])
      }
    }

    function entityChecker(old){
      if(old.id === entity.id){
        return entity
      }
      else{
        return old
      }
    }
  }
  
  return (
    <div className="App">
      <MainHeader />
      {errors.length > 0 ? errors.map(error =><p key={error + Math.random * 400} style={{textAlign: 'center', paddingTop: 30}}>{error}</p>) : null}
      <Switch>
        <Route exact path="/game">
          <Game players={players} mobs={mobs}/>
        </Route>
        <Route path='/dev'>
          <DevMode mobs={mobs} players={players} updateEntities={updateEntities}/>
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
