const Victory =({ resetGame })=>{
  return(
    <div className="p-4">
    <div className="flex flex-col justify-center items-center mt-40 bg-slate-900 w-30 rounded">
    <img className="w-36 mt-4" src="/img/victory.gif"/>
    <h2 className="text-white font-bold text-2xl mt-4">Congratulations</h2>
    <h3 className="text-white text-xl font-semibold mt-2">You Won</h3>
    <button className="bg-orange-500 text-white p-2 w-32 rounded mt-4 mb-8" onClick={resetGame}>Play Again</button>
    </div>
    </div>
    )
}

export default Victory;