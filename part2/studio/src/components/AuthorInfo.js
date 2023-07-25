import recipedata from "./recipe.json";

function AuthorInfo() {
  const recipeAuthor = recipedata.map((data) => (
    <div key={data.name}>{data.author}</div>
  ));
  const recipeAuthorImage = recipedata.map((data) => (
    <div key={data.name}>
      <img src={data.authorImage} alt={data.name} className="authorImage"/>
    </div>
    
  ));
  const recipeWebsite = recipedata.map((data) => (
    <a href={data.website}>{data.website}</a>
  ))
  return (
    <div>
      {recipeAuthor}
      {recipeAuthorImage}
      {recipeWebsite}
    </div>
  );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 