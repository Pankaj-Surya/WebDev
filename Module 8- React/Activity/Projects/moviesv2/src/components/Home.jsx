import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import MovieList from './MovieList'
import Pagination from './Pagination'
function Home() {

  

  // function Ban(){
  //   React.useEffect(async function(){
  //     let response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=3d0d19fa95bbcb42f7a4cf93bc4eeead")
  //     let data = await response.json();
  //     console.log(data);
  //   },[])
  // }
  
  

  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <MovieList></MovieList>
    <Pagination></Pagination>
    </>
    
  )
}

export default Home


