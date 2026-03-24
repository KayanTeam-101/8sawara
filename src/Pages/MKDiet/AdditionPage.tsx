import React, { useState } from 'react'
import foods from '../../assets/FoodsList.json'
import { FaBowlFood } from 'react-icons/fa6';
import { IoInformation } from 'react-icons/io5';
import { BsSave } from 'react-icons/bs';

const AdditionPage = (props: any) => {

  const [text, setText] = useState('');
  const [FoodArray, setFoodArray] = useState<string[]>([]);
  const [Calories, setCalories] = useState<number>(0);
  const [Proteins, setProteins] = useState<number>(0);
  const [Vitamines, setVitamines] = useState<string[]>([]);
  const SelectedItems = () => {
    return foods
      .map(food => food.FoodName)
      .filter(foodName =>
        foodName.toLowerCase().includes(text.toLowerCase())
      );
  };
  const handleAdd = (food: string) => {
    let getAmount = prompt(`How much ${food} do you want to add? (in grams)`);
    
    if (getAmount) {
      setFoodArray(prev => [...prev, food]);
      // Search for the food in the foods array to get its nutritional info
        const SearchFood = () =>{
            const GetInformations = foods.find(item => item.FoodName === food);
            if (GetInformations) {
  
              setCalories(prev => prev + Number(GetInformations.calForOneKilo) * (Number(getAmount) / 1000));
              setProteins(prev => prev + Number(GetInformations.ProtineForOneKilo) * (Number(getAmount) / 1000));
              GetInformations.MostVitamens.map(vit => {
                if (vit && !Vitamines.includes(vit)) {
                  setVitamines(prev => [...prev, vit]);
                }
              });
            }
        }
        SearchFood();
    }

  }
const handleSave = () => {
  const getData = JSON.parse(localStorage.getItem('Diet') || '{}');

  const mealData = getData[props.Meal] || [[], []];

  const UpdatedFoods = [...mealData[0], ...FoodArray];
  const UpdatedInfo = [Calories, Proteins, Vitamines];
  const NewData = {
    ...getData,
    [props.Meal]: [
      UpdatedFoods, // foods
      [...props.Meal[1], ...UpdatedInfo]      // nutrition info
    ]
  };

  localStorage.setItem('Diet', JSON.stringify(NewData));
  window.location.reload();
};

  return (
    <div className='absolute top-0 left-0 w-full min-h-screen flex flex-col gap-5 bg-purple-50 p-5 show-first'>

      <div className='w-full absolute top-0 left-0 h-44 bg-linear-to-b from-indigo-600 via-purple-300 to-transparent rounded-b-3xl'>
        <h1 className='text-indigo-50 text-4xl font-bold text-center mt-5'>
          Add Dishes to {props.Meal}
        </h1>
      </div>

      <div className='w-full flex flex-col  '>
        <div className='relative z-20 top-12 w-full bg-white shadow h-fit rounded-2xl text-gray-700'>
        <div className='relative w-full min-h-32 p-3'>

          <input
            type="text"
            value={text}
            placeholder='Search for a dish...'
            onChange={(e) => setText(e.target.value)}
            className='w-full p-3 border-2 border-gray-100 rounded-b-3xl mb-3 rounded-t-2xl outline-none focus:border-indigo-500'
          />

          <div className='w-full  min-h-12 max-h-40 flex flex-col items-center gap-0.5 overflow-x-scroll transition-all duration-300 '>

            {SelectedItems().map((food, idx) => (
            food ? (
                  <div
                key={idx}
                className='w-full p-3.5 bg-gray-100 rounded-lg text-md active:bg-indigo-100 active:text-indigo-600 cursor-pointer activeAnim'
                onClick={() => handleAdd(food)}
              >
                {food}
              </div> 
            ) : (<div
                className='w-full p-3.5 bg-gray-100 rounded-lg text-md active:bg-indigo-100 active:text-indigo-600 text-center cursor-pointer'
              >
                No Results Found    
              </div>)
            ))}

          </div>
        </div>
      </div>
          <div className='relative top-8 p-4 w-full min-h-50 z-10 shadow-lg bg-white rounded-xl text-md active:bg-indigo-100 active:text-indigo-600 cursor-pointer'>
<h1 className='text-center font-bold text-lg text-gray-700'>
            Added  Foods <FaBowlFood className='inline-block mb-2' />

</h1>
            <div className='w-full min-h-12 max-h-60 flex flex-row flex-wrap p-3 items-center gap-0.5 overflow-x-scroll'>

            {FoodArray.map((food, idx) => (
              food.length > 0 ? (
                <div
                  key={idx}
                  className='w-fit p-3.5 bg-gray-100 rounded-lg text-md active:bg-indigo-100 active:text-indigo-600 cursor-pointer'
                >
                  {food}
                </div>
              ) : (
                <div
                  className='w-full p-3.5 bg-gray-100 rounded-lg text-md active:bg-indigo-100 active:text-indigo-600 text-center cursor-pointer'
                >
                  No Foods Added Yet
                </div>
              )
            ))}
          </div>
        </div>
        <div className='relative top-14 p-4 w-full min-h-50 z-0 shadow-xl bg-white rounded-2xl text-md active:bg-indigo-100 active:text-indigo-600 cursor-pointer'>
<h1 className='text-center font-bold text-lg text-gray-700'>
            Health info in this meal <IoInformation className='inline-block mb-2' />

</h1>
<div className='w-full min-h-12 max-h-60 grid grid-cols-2 gap-2 overflow-x-scroll'>
  <div className='flex gap-2 flex-col'>
    <div className=' font-thin text-md text-indigo-600'>Goal Calories At All: <span>2901</span></div>
    <div className='font-thin bg-red-200 p-3 rounded-xl text-md text-gray-600'>Calories: <br /> <span>{Calories.toFixed(1)}</span></div>
    <div className='font-thin bg-teal-400 p-3 rounded-xl text-md text-gray-600'>Proteins: <br /> <span>{Proteins.toFixed(1)}g</span></div>
  </div>
  <div>
    <div className='p-4'></div>
    <div className='font-thin min-h-20 bg-linear-210 from-green-100 to-red-100 p-2 rounded-2xl text-md text-gray-600'>Vitamines: <br /> <span dangerouslySetInnerHTML={{ __html: Vitamines.join("<span class='text-green-900 text-2xl'>  ,  </span>") }} /></div>
  </div>
</div>
        </div>
      </div>
<button onClick={handleSave} className='relative top-12   p-4 bg-indigo-600 text-white rounded-full text-lg font-bold flex items-center justify-center gap-2 active:bg-indigo-700 activeAnim'>
  Save <BsSave className='inline-block mb-1' />
</button>
<br />
<br />
<br />
<br />
    </div>
  )
}

export default AdditionPage