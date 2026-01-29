import React,{useState, useMemo} from 'react'

const UseMemo = () => {
    const[count,setCount]=useState(0);
    const[number,setNumber]=useState(0);
    const cubeNum=()=>{
        console.log("calculation done....")
        return Math.pow(number,3)
    }
    const result= useMemo(()=>{
        cubeNum(number)
    },[number]); 
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>inc</button>
      <input type="number" onChange={(e)=>setNumber(e.target.value)}/>
      <p>cube of the number is {result}</p>

    </div>
  )
}

export default UseMemo
