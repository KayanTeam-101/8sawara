import React from 'react'

const Meal = (props : any) => {
  const getData: string | null = localStorage.getItem('Diet');
  const chooseIconsForMeal = (mealName: string) => {
    switch (mealName) {
      case 'Breakfast':
        return '🍳';
      case 'Lunch':
        return '🍽️';
      case 'Snacks':
        return '🍪';
      case 'Dinner':
        return '🌙';
      default:
        return '🍽️';
    }
  };

  return (
    <div className='bg-white p-5 rounded-3xl shadow-lg  '>
    <h1 className='text-3xl text-black'>{props.MealName}<span className='text-2xl p-2' >{chooseIconsForMeal(props.MealName)}</span></h1>
    <h6 className='text-indigo-400'>Double Click to Done a Dish.</h6>
 <div className='flex gap-2.5 flex-col'>
    {getData && JSON.parse(getData)[props.MealName][0].map((dish: string, idx: number) => (
      <div key={props.MealName + '-' + idx} className='w-full p-3.5 bg-gray-100 rounded-lg text-md active:bg-indigo-100 active:text-indigo-600 cursor-pointer activeAnim'>
        {dish}
      </div>
    ))}
              <div className='relative top-3 w-full h-fit flex flex-row gap-1 .5 flex-wrap '>

    {getData && JSON.parse(getData)[props.MealName][1].map((info: string, idx: number) => (
      <div key={props.MealName + '-info-' + idx}  className={`flex w-fit p-1.5 m-0.5 ${idx === 0 ? 'border-teal-300' : 'border-orange-300'} ${idx === 2 ? 'border-orange-300' : ''} border-2 bg-gray-100 rounded-lg  gap-1.5 text-md text-black cursor-pointer activeAnim`}>
        {idx === 0 ? `Calories: ${Number(info).toFixed(1)} kcal` : ``}
        {idx === 1 ? `Proteins: ${Number(info).toFixed(1)} g` : ``}
        {idx === 2 ? `Vitamins: ${info}` : ``}
      </div>
    ))}</div>
 </div>
          </div>
  )
}

export default Meal
