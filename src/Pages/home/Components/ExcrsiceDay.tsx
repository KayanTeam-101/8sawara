import React from 'react'
import { FaArrowRight } from 'react-icons/fa6';
import { GiLeg } from 'react-icons/gi';
import { LiaDumbbellSolid } from "react-icons/lia";

const ExerciseDay = () => {
  return (
    <div className='relative min-h-96 w-full p-5 bg-linear-to-b from-indigo-500  to-indigo-700 rounded-2xl border-indigo-50 flex flex-col gap-10'>
      <h2 className='text-4xl text-white font-bold mb-2'>Exercise Day</h2>
    <h1 className='text-5xl text-white font-bold mb-2'>Today is Leg Day <div><GiLeg className='absolute text-9xl scale-200 left-0 top-0 opacity-20'/></div></h1>
    <button className='flex items-center gap-2 bg-white p-3 shadow-2xl w-fit rounded-xl text-indigo-500 font-bold'>
      go to exercises <FaArrowRight />
    </button>
      <div>
          <LiaDumbbellSolid className="text-9xl text-indigo-100 absolute bottom-5 right-5 " />
      </div>
    </div>
  )
}

export default ExerciseDay
