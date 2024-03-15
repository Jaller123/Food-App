import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
let API_KEY = "1"

const Search = () => 
{
const [query,setQuery] = useState("Enter a Recipe")
useEffect(()=> { //The useEffect will launch whenever the app is started or input is searched
async function fetchFood()
{
  const res =  await fetch(`${url}`)
  const data =  await res.json();
  console.log(data)
}
fetchFood()
}, [query]);
  return (
    <div>
        <input value={query} onChange={(e)=>setQuery(e.target.value)}type="text" />
    </div>
  )
}

export default Search