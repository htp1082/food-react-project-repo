import React, { useState } from "react";
import { use } from "react";
import Menu from "../ menu/Menu";
import "./Menus.css";

const Menus = ({ foodFech }) => {
  const foodMenu = use(foodFech);
  const meals = foodMenu.meals;

  const [addtoFavourtie , setAddtoFavourite] = useState([]);

  const favouriteFoodHandler=(foods)=>{
    const newAddtoFavourite = [...addtoFavourtie,foods]
    setAddtoFavourite(newAddtoFavourite);
  }

  const [addFoodPic, setAddFood] = useState([]);

  const addtoFoodPicHandler=(foodPic)=>{
    const newAddtoFoodPic = [...addFoodPic,foodPic];
    setAddFood(newAddtoFoodPic);
  }
  
//   console.log(meals);
  return (
    <div>
      <h2>Total food item: {meals.length}</h2>
      <h2>Total Add to favourite cart: {addtoFavourtie.length}</h2>
      <ol>
        {addtoFavourtie.map(foods => <li>{foods.strMeal}</li>)}
      </ol>
      <ol className="img">
        {addFoodPic.map(foodPic => <li> <img src={foodPic} id="img"></img></li>)}
      </ol>
   
      <div className="card-grid">
        {meals.map((meal) => (
          <Menu key={meals.idMeal} meal={meal} favouriteFoodHandler={favouriteFoodHandler} addtoFoodPicHandler={addtoFoodPicHandler} ></Menu>
        ))}
      </div>
    </div>
  );
};

export default Menus;
