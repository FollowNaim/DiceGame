import {useState} from 'react'
const RoleDice = ({ error, randomNumber, Roled, currentDice, selected })=>{
  return(
    <div>
    <div className="flex justify-center items-center mt-2">
    <img id="diceImage" onClick={(prev)=>
    {
     const image = document.getElementById("diceImage");
     if(error==""){
     Roled();
     if(image){
       image.style.transition = "0.5s";
       image.style.transform = "rotate(360deg)";
       setTimeout(()=>{
         image.style.transition = "none";
         image.style.transform = "rotate(0deg)";
       },500)
     }
    }}} className={`w-36 ${currentDice?'rotate':''}`} src={`./images/dices/dice_${currentDice}.png`} />
    </div>
    <p className="text-center font-semibold text-xl mt-4">Roll The Dice </p>
    
    </div>
    )
}

export default RoleDice;