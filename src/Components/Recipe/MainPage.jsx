import { useState } from "react";
import MealCard from "./MealCard";
import "./RStyle.css";


const MainPage = () => {

    const [data,setData] = useState();
    const [search, setSearch] = useState("");
    const [msg,setMsg] =useState("");


    const handleInput = (event) => {
         setSearch(event.target.value)
    }

    const myRecipe = async () => {
        if(search == ""){
             setMsg("Please Enter Meals name")
        }else{
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            const jsonData = await get.json();
            // console.log();
            setData(jsonData.meals)
            setMsg("");
        }
        
    }

    // console.log(data);
  return (
    <div className="mt-10">
       <div  className="w-80 mx-auto">
       <div className="flex gap-2 items-center justify-center">
       <label className="input border border-green-500 flex  items-center searchinputclass">
            <input type="text" className="grow" placeholder="Pizza,Burger...." onChange={handleInput} />
            </label>
            <button onClick={myRecipe} className="bg-green-600 p-3 text-white rounded-md">Search</button>
       </div>
            <h4>{msg}</h4>
       </div>
       
       <div>
        <MealCard detail={data}/>
       </div>
       </div>
       
  )
}

export default MainPage