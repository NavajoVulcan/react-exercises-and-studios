const RecipeAuthor = () => {
   let authorLink = "https://thefancynavajo.com/2023/04/07/fancy-blue-corn-strawberry-shortcake-recipe/";
   let authorPhoto = "https://i0.wp.com/thefancynavajo.com/wp-content/uploads/2017/04/img_6941.jpg?resize=768%2C1152&ssl=1";
   let authorName = "The Fancy Navajo";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["roasted blue corn meal", "juniper ash", "Blue Bird Flour", "sugar", "cream"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://i0.wp.com/thefancynavajo.com/wp-content/uploads/2023/04/IMG_4130-1.jpg?resize=768%2C1152&ssl=1" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}