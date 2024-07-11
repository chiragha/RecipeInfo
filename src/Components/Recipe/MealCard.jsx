/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import "./RStyle.css";


const MealCard = ({detail}) => {
    console.log(detail);
  return (
    <div className="meals">
      
        {!detail ? "Data Not Found" : 
           detail.map((curItem) => {
           return(
            <div className="mealImg">
            <img src={curItem.strMealThumb} />
            <p>{curItem.strMeal}</p>
           <NavLink to={`/${curItem.idMeal}`}><button>Recipe</button></NavLink>
           </div>
           )
           })
        
        }
    </div>
  )
}

export default MealCard