import React from 'react'
const Firstturn : React.FC = () => {
  return (
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-10/12 min-h-40 bg-indigo-50 p-4 rounded-xl'>
      <div>
        <p className='text-5xl font-extrabold text-center translate-x-[25%] show-first '>أهلاً </p>
        <p className='text-3xl font-extrabold text-center show-second'>بك في  <span className='text-indigo-500'>قسوّرة</span></p>
        <br />
        <p className='text-base font-extrabold text-center show-third'>هنا تقدرتنظم كل جدولك الجمّاوّية بشكل بسيط و جميل فنفس الوقت</p>
      </div>
    </div>
  )
}

export default Firstturn
