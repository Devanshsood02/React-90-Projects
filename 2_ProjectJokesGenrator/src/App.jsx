import React from 'react'
import JokesApi from './components/JokesApi'

const App = () => {
  return (
    <div className=' flex bg-[rgb(19,56,43)] h-screen p-6 items-top justify-center '>
      <div className=' h-fit flex flex-col gap-14 items-center'>

      <h1 className='text-4xl text-[beige] font-semibold'>Jokes Generator using React and Joke API</h1>
      <JokesApi />
      </div>
    </div>
  )
}

export default App