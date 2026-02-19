import React, { useState } from 'react'
import Button from './Button';

const JokesApi = () => {

    let[joke,setJoke]=useState("");

    let fetchApi=()=>{
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
        .then((res)=>res.json())
        .then((data)=>setJoke(data.joke));
    }

  return (
    <div className='flex flex-col gap-10 items-center w-140'>
          <Button  jokecalling={fetchApi} setJoke={setJoke} />
        <p className='w-full  text-[beige]'>{joke +"😂😂😂"}</p>
    </div>
  )
}

export default JokesApi