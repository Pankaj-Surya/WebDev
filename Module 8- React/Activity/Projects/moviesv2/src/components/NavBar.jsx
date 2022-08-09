import React from 'react'
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className=" border pl-8 py-4 flex space-x-8 items-center">
    <img className='w-[50px] md:w-[80px]' src
        ="https://img.icons8.com/external-bearicons-blue-bearicons/50/000000/external-movie-call-to-action-bearicons-blue-bearicons.png">
    </img>
    
        <div className='text-blue-400 font-bold text-xl md:text-3xl' >Movies</div>
        <div className='text-blue-400 font-bold text-xl md:text-3xl'>Favorites</div>
    
</div>
  )
}

export default NavBar