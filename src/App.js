
import React from "react";
import { useEffect,useState } from "react";
import './App.css'
import SearchIcon from './search.svg'
import Movie from "./Movie";


const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=4bc1df67"

const App = () => {


  const [movies,setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState([]);

  const serachMovies = async (title) =>{

    const result = await fetch(`${API_URL}&s=${title}`);  
    const data = await result.json();
    setMovies(data.Search);


  }

  useEffect( () => {
    serachMovies('Avengers')
  },[])
  
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <form action="" id="search_recipes">
                <input placeholder="Search For Movie" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <i class="fa fa-search" onClick={ ()=> serachMovies(searchTerm) }></i>
      </form>

      {
        movies?.length > 0
        
        ?( <div className="container">
            { movies.map((movie) => {
               return  <Movie movie={movie} />         
            })
          } 
          </div>
        ) :(
           <div className="empty">
             <h2>No movie found</h2>
             </div>
        )
      }
      
      
    </div>
  );
}

export default App;