import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Update() {

  const [book,setBook] = useState({
    title : "",
    desc : "",
    price : null,
    cover : ""
  })
  const [error,setError] = useState(false)
  // if after post/create date succcessfully - navigate to home page 
  const navigate = useNavigate()
  const location = useLocation();

  // get booId from Url
  const bookId = location.pathname.split("/")[2]

  const handleChange = (e) =>{
    setBook(prev => ({...prev,[e.target.name]: e.target.value } ))
  }
  // name attribute val same as usestate obj key
  //console.log(book)

  const handleClick = async e => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:8800/books/${bookId}`,book)
      navigate("/")
    } catch (error) {
      console.log(error)
      setError(true);
    }
  }
 
  console.log("hell from update")
  return (
    <div className='form'>
        <h1>Update Book</h1>
        <input type="text" placeholder='title' onChange={handleChange} name='title' />
        <input type="text" placeholder='desc' onChange={handleChange} name='desc' />
        <input type="text" placeholder='price' onChange={handleChange} name='price' />
        <input type="text" placeholder='cover' onChange={handleChange} name='cover' />
        <button onClick={handleClick}><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/update/${book.id}`}>Update</Link></button> 
    </div>
  )
}

export default Update