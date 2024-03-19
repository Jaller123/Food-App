import React from 'react'

const FoodItem = ({food}) => {
  return (
    <div>
        <img src={food.strMealThumb} alt="" />
        <h1>{food.strMeal}</h1> 
        <button>View Recipe</button>
    </div>
     /*The Key helps rendering every h1 tag to each and every unique idMeal 
         while the strMeal displays the title of each food */
  )
}

export default FoodItem