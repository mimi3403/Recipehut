

const Recipe = ({recipe}) => {
  return (
    <div className='recipeCard'>
      <img className='recipeCard_img'src={recipe['recipe']['image']} alt={recipe['recipe']['label']} />
      <p className='recipeCard_name'>{recipe['recipe']['label']}</p>
    </div>
  )
}


export default Recipe;