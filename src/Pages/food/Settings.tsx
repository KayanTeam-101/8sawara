import React from "react";
import { BsClockFill } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import { RiResetRightFill } from "react-icons/ri";

const Settings = () => {
    const SuringToResetADiet = () =>{
        const Sure = confirm("YOU WILL DELETE YOUR DITE IF YOU CLICK AT 'OK' AND CREATE NEW ONE");
        if (Sure) {
            location.href ='/MkADiet'
        }else{
            return false;
        }
    }
  return (
    <div className="fixed show-first top-0 left-0 z-50 w-screen h-lvh flex justify-center items-center bg-black/5 backdrop-blur-sm ">
      <div className="w-10/12 min-h-62 p-5 bg-white rounded-2xl">
      
        <div className="w-full h-full flex flex-col gap-3 justify-around">
          <div className="flex justify-between w-full p-3.5  rounded-lg font-thin text-md cursor-pointer activeAnim">
            Settings <div onClick={() => window.location.reload()} className="p-1.5 rounded-2xl  bg-gray-50"><FaXmark className="text-red-600" /></div>
          </div>
          <div className="flex justify-between w-full p-3.5 bg-gray-100 rounded-lg font-thin text-md active:bg-indigo-100 active:text-indigo-600 cursor-pointer activeAnim">
            History <BsClockFill />
          </div>

          <div onClick={SuringToResetADiet} className="flex justify-between w-full p-3.5 bg-gray-100 rounded-lg font-thin text-md active:bg-indigo-100 active:text-indigo-600 cursor-pointer activeAnim">
            
            Reset Dite <RiResetRightFill />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
