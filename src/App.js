import './App.css';
import Axios from 'axios';
import { useState } from 'react';
import Recipe from './Recipe';


function App() {
  const [query, setquery] = useState('');
  const [recipes, setrecipes] = useState([]);

  const YOUR_APP_ID = '2e14782e';
  const YOUR_APP_KEY = 'b524d33043f22dda227ecb69f4b19309';

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;

  async function getRecipes() {
    const result = await Axios.get(url);
    setrecipes(result.data.hits)
    console.log(result.data)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className='app'>
       <h1>Welcome to Recipehut!</h1>
      <form className='app_searchForm' onSubmit={onSubmit}>
        <input 
        type='text' 
        placeholder='Enter Ingredient' 
        value={query} onChange={(e) => setquery (e.target.value)}/>
        <input type='submit' value='Search' />
      </form>
      <div>
      {recipes.map(recipe => {
        return <Recipe recipe={recipe}/>;
      })}
      </div>
    </div>
  );
}

export default App;
