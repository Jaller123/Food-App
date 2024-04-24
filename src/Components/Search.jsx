import React, { useState, useEffect, useRef } from 'react';

const Search = ({ foodData, setFoodData }) => {
  const searchText = useRef('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchFood = async () => {
      if (query.trim() !== '') {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText.current}`;
        const res = await fetch(url);
        const data = await res.json();
        setFoodData(data.meals || []); // If data.meals is undefined, set an empty array
      } else {
        setFoodData([]); // If query is empty, set an empty array
      }
    };

    const timeoutId = setTimeout(fetchFood, 500);

    return () => clearTimeout(timeoutId);
  }, [query, setFoodData]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    searchText.current = e.target.value;
  };

  return (
    <div>
      <input className="Search" onChange={handleChange} type="text" placeholder="Search for a Recipe" />
      {query !== '' && !foodData.length && <p>No Recipe found</p>}
    </div>
  );
};

export default Search;
