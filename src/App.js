import './App.css';
import Axios from 'axios';
import { useState } from 'react';
import Recipe from './Recipe';


function App() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [healthLabels, setHealthLabels] = useState('vegan')

  const YOUR_APP_ID = '2e14782e';
  const YOUR_APP_KEY = 'b524d33043f22dda227ecb69f4b19309';

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

  async function getRecipes() {
    const result = await Axios.get(url);
    setRecipes(result.data.hits)
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
        value={query} onChange={(e) => setQuery (e.target.value)}/>
        <input type='submit' value='Search' />

        <select className='app_healthLabels'>
          <option onClick={() => setHealthLabels('vegan')}>Vegan</option>
          <option onClick={() => setHealthLabels('vegetarian')}>Vegetarian</option>
          <option onClick={() => setHealthLabels('dairy-free')}>Dairy-Free</option>
          <option onClick={() => setHealthLabels('gluten-free')}>Gluten-Free</option>
          <option onClick={() => setHealthLabels('wheat-free')}>Wheat-Free</option>
          <option onClick={() => setHealthLabels('low-sugar')}>Low-Sugar</option>
          <option onClick={() => setHealthLabels('egg-free')}>Egg-Free</option>
          <option onClick={() => setHealthLabels('peanut-free')}>Peanut-Free</option>
          <option onClick={() => setHealthLabels('tree-nut-free')}>Tree-Nut-Free</option>
          <option onClick={() => setHealthLabels('soy-free')}>Soy-Free</option>
          <option onClick={() => setHealthLabels('fish-free')}>Fish-Free</option>
          <option onClick={() => setHealthLabels('shellfish-free')}>Shellfish-Free</option>
        </select>
      </form>
      <div>
      {recipes.map((recipe, i) => {
        return <Recipe key={i}recipe={recipe}/>;
      })}
      </div>
    </div>
  );
}

export default App;
