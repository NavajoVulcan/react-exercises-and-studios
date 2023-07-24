let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function GiveRating(props) {
  function GiveRating() {
  return <h3>{stars[props.rating - 1]}</h3>;
}
return (props.rating <= 5 && props.rating >= 1) ? GiveRating() : null;

}
//conditional to render stars based on a number provided in App.js 
export default RateARecipe;