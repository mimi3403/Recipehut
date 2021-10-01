import './App.css';
import Axios from 'axios';


function App() {
  const YOUR_APP_ID = '2e14782e';
  const YOUR_APP_KEY = 'b524d33043f22dda227ecb69f4b19309';

  const url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;

  async function getRecipes() {
    const result = await Axios.get(url);
    console.log(result.data)
  }

  return (
    <div className="app">
       <h1 onClick={getRecipes}>Welcome to Recipehut!</h1>

    </div>
  );
}

export default App;
