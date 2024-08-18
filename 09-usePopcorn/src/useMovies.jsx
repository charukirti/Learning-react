import { useState, useEffect } from "react";

const KEY = "8f827595";
export function useMovies(query){
    const [movies, setMovies] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState("");
    useEffect(
        function () {
          // callback?.()
          const controller = new AbortController();
    
          async function fetchMovies() {
            try {
              setIsLoaded(true);
              setError("");
    
              const res = await fetch(
                `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
                { signal: controller.signal }
              );
    
              if (!res.ok) throw new Error("Unable to fetch :(");
    
              const data = await res.json();
    
              if (data.Response === "False") throw new Error("Movie not found");
    
              setMovies(data.Search);
              console.log(data.Search);
            } catch (err) {
              if (err.name !== "AbortError") {
                setError(err.message);
              }
            } finally {
              setIsLoaded(false);
            }
          }
    
          if (query.length < 3) {
            setMovies([]);
            setError("");
            return;
          }
        //   handleCloseMovie();
          fetchMovies();
    
          return function () {
            controller.abort();
          };
        },
        [query]
      );

      return {
        movies, isLoaded, error
      }
}