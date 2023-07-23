export default function BookList() {
   let pageTitle = "My Summer Reading";
   let book1 = "https://pictures.abebooks.com/isbn/9780826412768-us.jpg";
   let book2 = "https://bookoutlet.com/_next/image?url=https%3A%2F%2Fimages.bookoutlet.com%2Fcovers%2Flarge%2Fisbn978150%2F9781501143335-l.jpg&w=640&q=75";
   let book3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf0ntm5OJzZdH6YZ3eS6jWvRVcOmAf5xaulTZmch2ZlAJF7mVq";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Pedagogy of the Oppressed by Paulo Freire" />
         <img src={book2} alt="Bullshit Jobs: A Theory by David Graeber" />
         <img src={book3} alt="Dead to the World by Charlaine Harris" />
      </div>      
   );
}