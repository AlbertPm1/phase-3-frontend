import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";
import "../App.css"
  
const WatchList = () => {
 const [movies, setMovies] = useState([])

 function handleDelete(id) {
  fetch(`http://localhost:9292/movies/${id}`,{
    method: 'DELETE',
  })
  .then(() => {
    const Delete = movies.filter(m => m.id !==id)
    setMovies(Delete)
  });
 }


  useEffect(()=>{

    fetch("http://localhost:9292/movies")
    .then(response => response.json())
    .then(movies => setMovies(movies))
  },[])

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watch List</h1>
          <span className="count-pill">
            
          </span>
        </div>
      
          <div className="movie-grid">
         
          {movies.map(movie =>{
              return(
                <div key = {movie.id}>
                  <p>title: {movie.title}</p>
                  <img id = "poster"src = {movie.poster}/>
                  <aside>director: {movie.director_id}</aside>
                  <button onClick={()=>handleDelete(movie.id)}>Delete</button>
                  

                </div>
              )
            })}
          </div>
       
          {/* <h2 className="no-movies">No Movies In Watch List</h2> */}
     
      </div>
    </div>
  );
};

export default WatchList;
