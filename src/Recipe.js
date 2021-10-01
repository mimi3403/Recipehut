import './Recipe.css'

const Recipe = ({recipe}) => {
  return (
    recipe['recipe']['image'].match(/\.(jpeg|jpg|gif|png)$/)
    != null &&(
    <div className='recipeCard' onClick={(e) => {
      e.preventDefault();
      window.open(recipe['recipe']['url'])
    }}>
      <img className='recipeCard_img'src={recipe['recipe']['image']} alt={recipe['recipe']['label']} />
      <p className='recipeCard_name'>{recipe['recipe']['label']}</p>
    </div>
    )
  );
}


export default Recipe;