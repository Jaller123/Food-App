import React from 'react'
import { useState, useEffect, useRef } from 'react'


// FoodList sends the data in props as "setFoodData"
const Search = ({ foodData, setFoodData }) => {
  const searchText = useRef();
  const [query, setQuery] = useState(null); 
  /* The input Value has "query" which
   can be any value depending on what the user writes.*/

  useEffect(() => 
  {
    async function fetchFood() 
    {
      let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText.current.value}`
      const res = await fetch(`${url}`);
      const data = await res.json();
      console.log(data.meals);
      setFoodData(data.meals);
    }

    if (query) 
    {
      fetchFood();
    }
    
    else
    {
      setFoodData(null)
    }

  }, [query]); 
  /*We use the query in the UseEffect Array so whenever the input field is
  changed the effect rerenders*/

  return (
    
    <div>
      
        <input className="Search" onChange={()=>setQuery(searchText.current.value)}type="text" ref={searchText} />
    </div> // The input value will be updated from the state "setQuery" and is referred from the "searchText"
  )
}

export default Search