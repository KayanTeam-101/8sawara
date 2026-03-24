import Navbar from './Components/layouts/Navbar';
import Exersice from './Pages/Exersices/Exersice';
import FoodPage from './Pages/food/FoodPage';
import Home from './Pages/home/Home';
import MakeADiet from './Pages/MKDiet/MakeADiet';
import Welcome from './Pages/Welcome/Welcome'
import { Routes, Route } from "react-router-dom";

function App() {
  const isFirstTime : boolean = localStorage.getItem("isFirstTime") === "true";
  return (
    <>
      <Routes>
        <Route path="/" element={isFirstTime ? <Welcome /> : <Home />} />
        <Route path="me/home" element={<Home />} />
        <Route path="me/food" element={<FoodPage />} />
        <Route path="MkADiet" element={<MakeADiet />} />
        <Route path="/exercises" element={<Exersice/>} />
      </Routes>
      {!isFirstTime && <Navbar /> }
    </>
  )
}

export default App
