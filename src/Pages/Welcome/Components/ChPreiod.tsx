import React from 'react'
import { period } from '../../../utilities/utilities';
import CounterY from '../../../utilities/CounterY';

const ChanlangePreiod : React.FC = () => {
  const getCurrentWeight = parseFloat(localStorage.getItem('currentWeight') || '0');
  const getTargetWeight = parseFloat(localStorage.getItem('targetWeight') || '0');
  const weightDiff : number = getCurrentWeight - getTargetWeight;
  function MinMonth(weightDiff: number): number {  
      let min_month = Math.floor(Math.abs(weightDiff) / 2)  ;
      console.log(min_month);
      console.log(weightDiff);
      console.log(Math.round(weightDiff));

      
      
      
      return min_month;
  }
  let numbers: number[] = period(MinMonth(weightDiff), MinMonth(weightDiff) + 5);
     const handleChange = (value: number) => {
    console.log("Selected:", value);
    localStorage.setItem('challengePeriod', value.toString());
  }; 

  return (
    <div className=' h-11/12 show-first flex items-center justify-between flex-col  ' >
<div>
        <h2 className='text-5xl translate-y-10 text-indigo-400 font-extrabold mb-4 text-center '>عايز توصل لهدفك بعد كام شهر <span className='text-indigo-500'>؟</span></h2>
        <p className='relative top-5 text-center text-gray-400   '>أقل فترة بالنسبة لفرق الوزن هي {MinMonth(weightDiff)} شهر</p>
</div>
      <CounterY arr={numbers}  size='lg' onChange={handleChange} />
    </div>
  )
}



export default ChanlangePreiod
