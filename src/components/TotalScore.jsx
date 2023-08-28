const TotalScore = ({score})=>{
  return(
    <div className="flex justify-center items-center text-center flex-col mt-[5%] sm:mt-[5%]">
    <span className="font-extrabold text-5xl">{score}</span>
    <p className="font-bold text-2xl">Total Score</p>
    </div>
    )
}

export default TotalScore;