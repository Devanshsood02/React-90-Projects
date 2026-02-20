import React from 'react'

const Button = ({jokecalling}) => {
  return (
    <div>
        <button className='bg-[#598e1d] hover:bg-[#5bb407] active:bg-[#297910] text-white text-xl px-12 py-3 rounded-xl cursor-pointer2 ' onClick={jokecalling}>Click Here </button>
    </div>
  )
}

export default Button