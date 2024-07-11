/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useParams } from "react-router-dom"
import "./RStyle.css";
import Btn from "./Btn";

const MealInfo = () => {
    const {mealid} = useParams();
    // console.log(mealid);

    const[info, setInfo] = useState();


    const getInfo = async () =>{
        const get =  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData = await get.json();
        console.log(jsonData.meals[0]);
        setInfo(jsonData.meals[0])
    }
    if(info != ""){
        getInfo()
    }
  return (
   <>
     
    {
        !info ? "Data Not Found" :
        <><Btn /><div className='mealInfo'>

                      <img src={info.strMealThumb} />
                      <div className='info'>
                          <h1 className="mt-8 font-medium text-2xl text-center ">Recipe Details</h1>
                          <div className="">
                              <button className="my-3">{info.strMeal}</button>
                              <h3 className="bg-green-600 p-4 rounded-md text-center text-2xl">Recipe instruction</h3>
                              <p>{info.strInstructions}</p>
                          </div>
                      </div>
                  </div></> 
    }
   </>
  )
}

export default MealInfo