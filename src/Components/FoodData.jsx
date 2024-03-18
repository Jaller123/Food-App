import React from 'react'
import Search from './Search'
import { useState } from 'react'

const FoodData = () => 
{
    const [foodData, setFoodData]=useState([])
  return (
    <div>
        <Search foodData = {foodData} setFoodData={setFoodData}
        /*This will pass the data of the recipes into the Search component*//>
       {foodData.map((food)=>
       <h1 key ={food.strMeal}></h1>)}
    </div>
  )
}

export default FoodData