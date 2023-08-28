import TotalScore from './TotalScore'
import SelectNumbers from './SelectNumbers'
import RoleDice from './RoleDice'
import Rules from './Rules'
import Victory from './Victory'
import Contact from './Contact'
import {useState} from 'react'
const GamePlay = ()=>{
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState();
  const [currentDice, setCurrentDice] = useState(6)
  const [rules, setRules] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const [error, setError] = useState("")
  const randomNumber = (min, max)=>{
  return (Math.floor(Math.random() * (max - min) + min))
}
  const Roled = ()=>{
    if(!selected) {
      setError("Select a number first")
      return;
    }
    const newDiceValue = randomNumber(1,7)
    setCurrentDice(newDiceValue)
    if(selected===newDiceValue){
      setScore((prev)=>prev + selected)
    }else{
      setScore((prev)=> prev - 2)
    }
    setSelected(undefined)
  }
  const rulesToggle = (prev)=>{
    setRules((prev)=>!prev)
  }
  const infoToggle = (prev)=>{
    setShowInfo((prev)=>!prev)
  }
  const resetGame = () => {
    setScore(0);
    setSelected();
    setCurrentDice(6);
    setError('');
  };
  if (score >=30) {
    return (
      <div>
      <Victory resetGame={resetGame}/>
      </div>
    );
  }

  return(
    <div>
    <TotalScore score={score} />
    <SelectNumbers selected={selected} setSelected={setSelected} error={error} setError={setError} />
    <RoleDice randomNumber={randomNumber} Roled={Roled} currentDice={currentDice} error={error} selected={selected} />
    <div className="flex flex-col justify-center items-center mt-4">
    <div className="flex">
    <button className="bg-black text-white w-36 p-2 border-0 outline-0 rounded" onClick={()=>setScore(0)}>Reset Score</button>
    <button className="bg-gray-500 text-white w-36 p-2 border-0 outline-0 ml-2 rounded"onClick={rulesToggle}>{rules?"Hide":"Show"} Rules</button>
    </div>
    <button className="bg-orange-800 mt-4 text-white w-36 p-2 border-0 outline-0 ml-2 rounded"onClick={infoToggle}>{showInfo?"Hide Info":"Connect Noob"}</button>
    </div>
    {rules?<Rules /> : null}
    {showInfo?<Contact />:null}
    </div>
    )
}

export default GamePlay;