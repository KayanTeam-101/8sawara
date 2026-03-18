import React from 'react'
import Meal from './Meal'
import { FaBowlFood } from 'react-icons/fa6'
import { MdHistory } from 'react-icons/md'

type MealPlan = {
  Breakfast: string[]
  Lunch: string[]
  Snacks: string[]
  Dinner: string[]
}

const Diet = () => {
  const getDiet: string | null = localStorage.getItem('Diet')

  const convertToObj: MealPlan | null = getDiet
    ? JSON.parse(getDiet) as MealPlan
    : null
console.log(convertToObj);

  return (
    <div className=''>
      <div className="relative w-full min-h-14 flex flex-row justify-between">
        <div className="text-2xl flex flex-row gap-2">My Diet <FaBowlFood /></div>
        <div className="text-md flex items-center  flex-row  gap-2 ">History <MdHistory /></div>
      </div>

      {/* Meals Section */}
<div className='flex gap-4 flex-col'>
          {convertToObj &&
        (Object.keys(convertToObj) as Array<keyof MealPlan>).map(key => (

<>
          <Meal key={Math.random()} MealName={key}  />

</>
        ))
      }
</div>
<div className='h-14'></div>
    </div>
  )
}

export default Diet
