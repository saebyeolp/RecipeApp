import React, { useEffect, useState } from 'react';
import Recipe from "./Recipe";
import './App.css';


const App = () => {

  const APP_ID = '00df071a';
  const APP_KEY = '82edeba8e31b224c41b0e991e072467e';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`); 
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">

      <form onSubmit={getSearch} className="search-form">
        <input 
          className="search-bar" 
          type="text" 
          value={search} 
          onChange={updateSearch}
          placeholder="Search recipes by ingredients"
        />
        <button className="search-button" type="submit">Search</button>
      </form>

      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            url={recipe.recipe.url}
            dietLabels={recipe.recipe.dietLabels}
            ingredients={recipe.recipe.ingredients}
            />
        ))}
      </div>

    </div>
  );
}

export default App;

//source from https://www.youtube.com/watch?v=U9T6YkEDkMo&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=3
