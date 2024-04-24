import React from 'react'
import { useState } from 'react'
import './FoodItem.css'

const FoodItem = ({foodProp}) => {

  const [showRecipe, setShowRecipe] = useState(false);

   const handleClick = () => {
    /* ! means the opposite of the value meaning whenever the button is clicked,
        showIngredient becomes true and passes as a p element in the render */
    setShowRecipe(!showRecipe);
    
  };
  

  return (
    <div className="FoodData">

        <img className="foodImg" src={foodProp.strMealThumb} alt="" />
        <h1>{foodProp.strMeal}</h1>
        <h2>Country: {foodProp.strArea}</h2>
        <h2>Dish Type: {foodProp.strCategory}</h2>
        {showRecipe && (
        <div>
          <h3>Ingredients:</h3>
          <ul className='Ingredients'>
            {/*Array.from creates a new array where the first arguement means that the
            array should have a length of 15 and the second arguement means that a new
            list item is created based on the index and each index has a unique key.
            The indexes of the strIngredient is accessed by going through 0 to 14 hence: 
            "Index + 1"*/}
           {Object.keys(foodProp).map(key => {
           if (key.startsWith('strIngredient') && foodProp[key]) {
            const index = key.replace('strIngredient', '');
            const measure = foodProp[`strMeasure${index}`] || '';
    return (
      <li key={index}>
        {foodProp[key]} <b>{measure}</b>
      </li>
    );
  }
  return null;
})}
          </ul>
          <h4>Instructions:</h4>
          <p>{foodProp.strInstructions}</p>
          <h5>Source: {foodProp.strSource}</h5>
        </div>
      )}
        <button className="recipeBtn"onClick={() => handleClick()}>View/Hide Recipe</button>
    </div>
     /*The Key helps rendering every h1 tag to each and every unique idMeal 
         while the strMeal displays the title of each food */
  )
}

export default FoodItem