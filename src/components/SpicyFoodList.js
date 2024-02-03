import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
  }

  const foodList = foods.map((food) => (
    <li key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  )); 

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name="filter">
     <option value="All">All</option>
     <option value="American">American</option>
     <option value="Sichuan">Sichuan</option>
     <option value="Thai">Thai</option>
     <option value="Mexican">Mexican</option>
      </select>
    </div>
  );
}


export default SpicyFoodList;
