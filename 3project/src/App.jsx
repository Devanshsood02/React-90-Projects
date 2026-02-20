import React, { useEffect } from "react";
import { useState } from "react";


const App = () => {
  
  const [iscounting, setIsCounting] = useState(false);
  const [count, setCount] = useState(0)

  useEffect(()=>{
    if(!iscounting) return
    console.log(count)

   let interval= setInterval(() => {

      setCount((prev)=>prev+1)
      
    }, 1000);


    return ()=>{
       clearInterval(interval)
    }
  },[iscounting])
  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="h-70 w-70 rounded-full  border-gray-400 border-4 text-white flex flex-col items-center justify-evenly">



        <h1 className="text-red-400 text-5xl">{count}</h1>
        <button className="text-3xl border px-8 py-2 rounded-xl cursor-pointer" onClick={
          ()=>{
            setIsCounting((prev)=>!prev)
          }
          
        }> {iscounting?"Stop":"Start"}</button>

        <button className="text-3xl border px-8 py-2 rounded-xl cursor-pointer" onClick={()=>{
          setCount(0)
          setIsCounting(false)
        }}>Reset</button>
      </div>
    </div>
  );
};

export default App;
