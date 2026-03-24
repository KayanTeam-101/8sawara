import React from 'react'

const Exersice = () => {
    const getDays = JSON.parse(localStorage.getItem("SelectedDays") || "[]");

      return (
    <div>
      {getDays}
    </div>
  )
}

export default Exersice
