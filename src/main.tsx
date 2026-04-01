import "./index.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { registerSW } from 'virtual:pwa-register'

 
  if(!localStorage.getItem("History")){
    const History: any = [];
    const CreateHistory = () => {
      const currentDate = new Date();
      History.push({
        date: currentDate.getFullYear() + "/" + (currentDate.getUTCMonth()+1) + "/" + currentDate.getDate(),
        meals: []
      });
      localStorage.setItem("History", JSON.stringify(History));
    };
    CreateHistory();
  }else{
    const History = JSON.parse(localStorage.getItem("History")!);
    const currentDate = new Date();
    const lastEntry = History[History.length - 1];
    const lastEntryDate = new Date(lastEntry.date);
    if (
      currentDate.getFullYear() !== lastEntryDate.getFullYear() ||
      currentDate.getMonth() !== lastEntryDate.getMonth() ||
      currentDate.getDate() !== lastEntryDate.getDate()
    ) {
      History.push({
        date: currentDate.getFullYear() + "/" + (currentDate.getUTCMonth()+1) + "/" + currentDate.getDate(),
        meals: []
      });
      localStorage.setItem("History", JSON.stringify(History));
    }}

registerSW()
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);