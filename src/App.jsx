import Home from './components/Home'
import GamePlay from './components/GamePlay'
import StartGame from './components/StartGame'
import {useState, useEffect} from 'react';



function App() {
  
  const [isGameStarted, setGameStarted] = useState(false)
  const ToggleGamePlay = ()=>{
    setGameStarted((prev)=>!prev)
  }
  
  return(
    <div>
    {
      isGameStarted ? <GamePlay /> : <Home toggle={ToggleGamePlay} />
    }
    </div>
    )
}

export default App;
