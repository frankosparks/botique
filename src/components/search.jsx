  import React from "react";
import { useState } from "react";

function Search(){
  const[showSearcBar, setShowSearchBar] = useState(false)
  const[query, setQuery] = useState('')

  const handleClick = () => {
    setShowSearchBar(!showSearcBar);
  }
  const handleInput = (e) => {
    setQuery(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // where to implement the search functionality 
    console.log('Searching for:', query);
  }
  return(
    <div className="search-container">
      <button onClick={handleClick} className="search-icon"><img src="\images\search2.jpg" alt="" className="cart" /></button>
      {showSearcBar&&(
        <form action="" onSubmit={handleSubmit} className="search-bar">
          <input 
            type="text"
            value={query}
            onChange={handleInput}
            placeholder="Am looking for..."
         />
        </form>
      )}
    </div>
  );
}

export default Search;