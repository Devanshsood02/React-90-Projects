import React from 'react'

const Button = ({handleReset,handleSubmit}) => {
  return (
    <div className="flex items-center  w-full gap-2 mt-3">
            <button className="px-6 py-2 text-xl bg-green-600 cursor-pointer w-50  rounded" onClick={(e)=>handleReset()}>
              Reset
            </button>
            <button
              className="px-6 py-2 text-xl bg-green-600 cursor-pointer  w-50 rounded "
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </div>
  )
}

export default Button