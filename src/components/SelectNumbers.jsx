import {useState} from 'react';
const SelectNumbers = ({ error, setError, selected, setSelected, })=>{
  const numArray = [1,2,3,4,5,6];
const selectNumberHandler = (value)=>{
    setSelected(value);
    setError("")
  }
  return(
    <>
    <div className="flex flex-col align-center text-center p-8 mt-[-4%] sm:mt-2">
    <div className="flex justify-center">
    {numArray.map((value, index)=><box className={`border-2 border-black border-solid rounded w-14 h-12 p-3 mr-2 ${selected===value?'bg-black text-white' : 'bg-white text-black'}`} onClick={()=>selectNumberHandler(value)} key={index}>{value}</box>)}
    </div>
    <div className={`flex flex-col ml-[10rem] sm:ml-[15rem] m-w-[50rem] mt-4 font-semibold ${error==""?"text-black":"text-red-500"}`}>
    <p className="">{(error=="")?"Select Numbers":error}</p>
    </div>
    </div>
    </>
    )
}

export default SelectNumbers;