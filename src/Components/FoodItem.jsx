import React from 'react'
import { useState } from 'react'

const FoodItem = ({foodProp}) => {

  const [showIngredient, setShowIngredient] = useState(false);

   const handleClick = () => {
    /* ! means the opposite of the value meaning whenever the button is clicked,
        showIngredient becomes true and passes as a h2 element in the render */
    setShowIngredient(!showIngredient);
    
  };

  return (
    <div>
        <img src={foodProp.strMealThumb} alt="" />
        <h1>{foodProp.strMeal}</h1>
        {showIngredient && <h2>{foodProp.strIngredient1}</h2>}
        <button onClick={() => handleClick()}>View/Hide Recipe</button>
    </div>
     /*The Key helps rendering every h1 tag to each and every unique idMeal 
         while the strMeal displays the title of each food */
  )
}

export default FoodItem