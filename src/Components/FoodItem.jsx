import React from 'react'
import { useState } from 'react'

const FoodItem = ({foodProp}) => {

  const [showRecipe, setShowRecipe] = useState(false);

   const handleClick = () => {
    /* ! means the opposite of the value meaning whenever the button is clicked,
        showIngredient becomes true and passes as a p element in the render */
    setShowRecipe(!showRecipe);
    
  };

  return (
    <div>

        <img src={foodProp.strMealThumb} alt="" />
        <h1>{foodProp.strMeal}</h1>
        <h2>Country: {foodProp.strArea}</h2>
        <h2>Dish Type: {foodProp.strCategory}</h2>
        {showRecipe && (
        <div>
          <h3>Ingredients:</h3>
          <ul>
            {/*Array.from creates a new array where the first arguement means that the
            array should have a length of 15 and the second arguement means that a new
            list item is created based on the index and each index has a unique key.
            The indexes of the strIngredient is accessed by going through 0 to 14 hence: 
            "Index + 1"*/}
            {Array.from({ length: 13 }, (_, index) => (
              <li key={index}>{foodProp[`strIngredient${index + 1}`]} // <b>{foodProp[`strMeasure${index + 1}`]}</b></li>
            ))}
          </ul>
          <h4>Instructions:</h4>
          <p>{foodProp.strInstructions}</p>
          <h5>Source: {foodProp.strSource}</h5>
        </div>
      )}
        <button onClick={() => handleClick()}>View/Hide Recipe</button>
    </div>
     /*The Key helps rendering every h1 tag to each and every unique idMeal 
         while the strMeal displays the title of each food */
  )
}

export default FoodItem