import React from 'react'
import { useState, useEffect, useRef } from 'react'


let url = "https://www.themealdb.com/api/json/v1/1/search.php?s="
let API_KEY = "1"



const Search = ({ foodData, setFoodData }) => {
  const searchText = useRef();
  const [query, setQuery] = useState("Enter a Recipe");

  useEffect(() => 
  {
    async function fetchFood() 
    {
      const res = await fetch(`${url}`);
      const data = await res.json();
      console.log(data);
      setFoodData(data.meals);
    }

    fetchFood();
  }, []);

  return (
    <div>
        <input onChange={()=>setQuery(searchText.current.value)}type="text" ref={searchText} />
    </div> // The input value will be updated from the state "setQuery" and is referred from the "searchText"
  )
}

export default Search