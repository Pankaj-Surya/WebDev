import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import MovieList from './MovieList'
import Pagination from './Pagination'
function Home() {
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