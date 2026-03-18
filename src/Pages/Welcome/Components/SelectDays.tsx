    import React,{useState} from 'react'

    const SelectDays: React.FC = () => {
        const days = ['السبت', 'الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'];
        let [SelectedDays, setSelectedDays] = useState<string[]>(localStorage.getItem('SelectedDays') ? JSON.parse(localStorage.getItem('SelectedDays') || '[]') : []);
        const handleSelect = (e: React.MouseEvent<HTMLButtonElement>) =>{
            const day = e.currentTarget.textContent;
            if(SelectedDays.length < 7 && !SelectedDays.includes(day || '')){
                setSelectedDays([...SelectedDays, day || '']);
                localStorage.setItem('SelectedDays', JSON.stringify([...SelectedDays, day || '']));
            }
         
        }
           const reset =  () => {
                localStorage.setItem('SelectedDays', JSON.stringify([]));
                setSelectedDays([]);
            };
    return (
        <div className=' h-11/12 show-first flex items-center justify-items-normal flex-col  ' >
           <div>
             <h2 className='text-4xl relative top-5 text-indigo-400 font-extrabold mb-4 text-center '> ايه الايام بتاع الجم<span className='text-indigo-500'>؟</span></h2>
            <h4 className='text-md text-gray-500'>إختياري مش ضروري</h4>
            <h4 className='text-md text-gray-500'>إضغط علي التالي بدون اختيار ولا يوم لو تمارينك في البيت</h4>
           </div>
            <div className='relative top-5 min-w-0 max-w-11/12 min-h-20  rounded-4xl  flex items-center  flex-wrap text-indigo-600 font-semibold text-lg p-2 gap-1.5  '>
     {SelectedDays.length === 0 ? <p className='text-indigo-500 text-xl'> ...</p> : SelectedDays.map((day,i) => (
        <div key={i} className='bg-white p-2 rounded-xl shadow-lg'>{day}</div>
     ))}  
            </div>
            <div className='relative w-11/12 top-10 text-center  p-3 bg-indigo-50 rounded-2xl'>
            <div className='text-indigo-400 text-3xl p-5'>اختر الأيام التي تناسبك لممارسة الرياضة</div>
             <div className='grid grid-cols-2 gap-2'>
  {days.map((day,i) => (
    <button key={i} className={`p-2 text-2xl  ${SelectedDays.includes(day) ? 'bg-indigo-500 text-white' : 'border-2 border-indigo-500 text-indigo-600'} rounded-xl`} onClick={handleSelect}>{day}</button>
  ))}   
</div>
  <button className='relative top-2 p-1 text-xl bg-white border-2 border-indigo-500 text-indigo-600 rounded-xl' onClick={reset}>إعادة تعيين</button>

            </div>
        </div>
    )
    }



    export default SelectDays;
