import React from 'react'
import { results } from "../MovieData"

function Banner() {
  let [firstMovie, setMovie] = React.useState("");

  console.log(results);
  React.useEffect(function () {
    let firstMovie = results[0];
    setMovie(firstMovie);
  }, [])


  return (
    <>
    <h1></h1>
    
    <div className={`bg-[url("https://image.tmdb.org/t/p/original//${firstMovie.backdrop_path}")]
          h-[35vh] md:h-[60vh] bg-center bg-cover flex items-end justify-center`}>
      <div className={`text-white text-xl  md:text-3xl p-4 bg-gray-900 bg-opacity-30 w-full`}>{firstMovie.title}</div>

       
    </div>
    </>
    
  )
}

export default Banner