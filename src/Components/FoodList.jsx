import React, { useState } from 'react';
import Search from './Search';
import FoodItem from './FoodItem';

const FoodList = () => {
  const [foodData, setFoodData] = useState([]);

  return (
    <div>
      <Search setFoodData={setFoodData} />

      {foodData.map((food) => (
        <FoodItem key={food.idMeal} food={food} />
         /*
         Passes the props of the food data into the FoodItem.jsx and loops
         through the food objects in that component. 
         
         The Key helps rendering every h1 tag to each and every unique idMeal 
         while the strMeal displays the title of each food
         */
      ))}
    </div>
  );
}

export default FoodList;
