import "./App.css";
import logo from "./logo.svg";

// Display a list of movies where each movie contains a list of users that favorited it.
// For detailed instructions, refer to Instructions.md.

const profiles = [
  {
    id: 1,
    userID: "1",
    favoriteMovieID: "1",
  },
  {
    id: 2,
    userID: "2",
    favoriteMovieID: "1",
  },
  {
    id: 3,
    userID: "4",
    favoriteMovieID: "5",
  },
  {
    id: 4,
    userID: "5",
    favoriteMovieID: "2",
  },
  {
    id: 5,
    userID: "3",
    favoriteMovieID: "5",
  },
  {
    id: 6,
    userID: "6",
    favoriteMovieID: "4",
  },
];

const users = {
  1: {
    id: 1,
    name: "Jane Cruz",
    userName: "coder",
  },
  2: {
    id: 2,
    name: "Matthew Johnson",
    userName: "mpage",
  },
  3: {
    id: 3,
    name: "Autumn Green",
    userName: "user123",
  },
  4: {
    id: 4,
    name: "John Doe",
    userName: "user123",
  },
  5: {
    id: 5,
    name: "Lauren Carlson",
    userName: "user123",
  },
  6: {
    id: 6,
    name: "Nicholas Lain",
    userName: "user123",
  },
};

const movies = {
  1: {
    id: 1,
    name: "Planet Earth 1",
  },
  2: {
    id: 2,
    name: "Selma",
  },
  3: {
    id: 3,
    name: "Million Dollar Baby",
  },
  4: {
    id: 4,
    name: "Forrest Gump",
  },
  5: {
    id: 5,
    name: "Get Out",
  },
};

const getUsers = (movieId) => profiles.filter((filteredProfile) =>  
// if movieid matches the movie that's been favorited...
filteredProfile.favoriteMovieID == movies[movieId].id
)
.map(filteredProfile => 
  // return user name who favorited the movie.
  // users[filteredProfile.id]
 users[filteredProfile.userID].name
);

const newMoviesObj = Object.keys(movies).map((movieKeyID) => {
// create a obj to list of all movies
// if movie key isn't included yet, add it else, grab any names that favorited that movie
console.log( {
  id: movies[movieKeyID].id,
  movieName: movies[movieKeyID].name,
  userList: getUsers(movieKeyID)

 });
console.log("Get users:");
console.log(getUsers(movieKeyID))

return(
 {
  id: movies[movieKeyID].id,
  movieName: movies[movieKeyID].name,
  userList: getUsers(movieKeyID),
 }
)

})

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <h2>How Popular is Your Favorite Movie?</h2>
         
          <ul>{newMoviesObj.map((movie) =>
            <li>{movie.movieName}
                   {movie.userList.length > 0 ?
                      <ul>
                          {movie.userList.map(user =>
                            <li> {user} </li>)}
                      </ul> 

                     
                           : <ul>
                            <li> No users favorited this movie</li>
                           </ul>
                    }
            </li>
            )}
          </ul>
    </div>
  );
};

export default App;
