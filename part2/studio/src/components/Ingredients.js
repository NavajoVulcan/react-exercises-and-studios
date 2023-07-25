import recipedata from "./recipe.json";


function IngredientList() {
  const ingredientsList = (
    <div>
      <h3>Ingredients</h3>
      {recipedata.map((data) => {
        return (
          <div key={data.name}>
            {data.ingredients.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>;
            })}
      </div>
        );
      })}
      </div>
  );
  
  return ingredientsList;

  }


 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array 