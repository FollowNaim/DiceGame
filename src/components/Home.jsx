
const Home = ({ toggle })=>{
  
  return(
    <div className="text-center mt-20">
    <div className="flex justify-center mx-auto">
    <img className="w-[220px] h-[200px] flex justify-center align-center mt-[30%]" src="/images/images (3).jpeg" />
    </div>
    <div className="flex flex-col justify-center align-center">
    <h1 className=" mx-auto text-3xl bold"> Dice Game </h1>
    <div className="">
    <button className="w-32 bg-black text-white p-2 rounded mt-8" onClick={toggle}>Play Now</button>
    </div>
    </div>
    
    </div>
    )
}

export default Home;