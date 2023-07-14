import React ,{useState} from "react";
import movieData from "./movieData";
import "./style.css";
import Movie from "./Movie";

const MoviesInfo = () => {
//   console.log(movieData);

// let ab={};
// if(ab) console.log(1);
// else console.log(2);
// output : 1
const [selectedMovie,setSelectedMovie]=useState({});
const [target,setTarget]=useState({target:''});

console.log(selectedMovie);
function showSelectedMovie(event,movie){
    // console.log(event.target.parentElement);
    if(target.target && target.target.style){
      // target.target.classList.remove('active');
    //  target=event.target.parentElement;
   target.target.style.backgroundColor='transparent';
    }
    let nextTgt=event.target.parentElement;
    nextTgt.style.backgroundColor="rgba(210, 219, 222, 0.6)";
    setTarget({target:nextTgt});
    setSelectedMovie(movie);
    
}


  return (
    <div className="Container">
      <h1 id="heading">Movies</h1>

      <div className="movie-section">
        <div className="movies-list-section">
          {movieData.map((movie) => (
            <div className="movies" onClick={(event)=>showSelectedMovie(event,movie)}>
              <h3 style={{color:'royalblue'}}>{movie.title}</h3>
              <p>Language: {movie.original_language}</p>
              <p> Popularity: {movie.popularity}</p>
            </div>
          ))}
        </div>

        <div className="movie-info-section">
          {
            Object.keys(selectedMovie).length<=0?
            <Movie info={movieData[Math.floor(Math.random()*movieData.length)]} />:
            <Movie info={selectedMovie}/>
          }
        </div>
      </div>
    </div>
  );
};
export default MoviesInfo;


