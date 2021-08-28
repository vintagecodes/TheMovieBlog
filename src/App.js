import './App.css';
import Movie from "./components/Movie";
import React, {useEffect, useState} from 'react';


const featured_api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=10c42e3cd3626b90eb861a2d86f04f90";


function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() =>{
    fetch(featured_api)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setMovies(data.results);
    });
  }, []);


  return (
    <>
    <div className="header">
    <center><h1>The<p className="mapp">Entertainments</p></h1></center>
      </div>
  <div className="movie-container">
    {movies.length > 0 && movies.map((movie)=> <Movie key={movie.id} {...movie} />)}
    </div>
    </>
  );
}
export default App;
