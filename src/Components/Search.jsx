import React from 'react'
import { useState, useEffect, useRef } from 'react'


// FoodList sends the data in props as "setFoodData"
const Search = ({ foodData, setFoodData }) => {
  const searchText = useRef();
  const [query, setQuery] = useState(null); 
  const debounceTimeout = useRef(null)
  /* The input Value has "query" which
   can be any value depending on what the user writes.*/

  useEffect(() => 
  {
    async function fetchFood() 
    {
      let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText.current}`
      const res = await fetch(`${url}`);
      const data = await res.json();
      console.log(data.meals);
      setFoodData(data.meals);
    }

    if (query !== null) 
    {
      clearTimeout(debounceTimeout.current);

      debounceTimeout.current = setTimeout(fetchFood, 500)
    }
    
    else
    {
      setFoodData(null)
    }

    return () => 
    {
      clearTimeout(debounceTimeout.current)
    }
  }, [query]); 
  /*We use the query in the UseEffect Array so whenever the input field is
  changed the effect rerenders*/

  const handleChange = (e) => //This function is used to update the query
  {
    setQuery(e.target.value)
    searchText.current = e.target.value
  }


  return (
    
    <div>
      
      <input className="Search" onChange={handleChange} type="text" placeholder="Search for a Recipe" />
    </div> // The input value will be updated from the state "setQuery" and is referred from the "searchText"
  )
}

export default Search