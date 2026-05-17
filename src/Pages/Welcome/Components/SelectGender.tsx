import React, { useState } from 'react';

const SelectGender: React.FC = () => {
  const genders = ['ذكر', 'أنثى'];

  const [selectedGender, setSelectedGender] = useState<string>(
    localStorage.getItem('SelectedGender') || ''
  );

  const handleSelect = (gender: string) => {
    setSelectedGender(gender);
    localStorage.setItem('SelectedGender', gender);
  };

  return (
    <div className='h-11/12 flex flex-col items-center'>
        <h2 className='text-3xl translate-y-10 text-sky-400 font-extrabold mb-4 text-center '> ذكر أم انثي<span className='text-sky-500'>؟</span></h2>

      <div className='relative top-15 grid grid-cols-2 gap-2'>
        {genders.map((g, i) => {
          const isSelected = selectedGender === g;

          return (
            <button
              key={i}
              onClick={() => handleSelect(g)}
              className={`p-2 text-2xl rounded-xl
                ${isSelected
                  ? 'bg-sky-500 text-white'
                  : 'bg-white border-2 border-sky-500 text-sky-600'}`}
            >
              {g} {g === 'ذكر' ? '♂️' : '♀️'}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SelectGender;
