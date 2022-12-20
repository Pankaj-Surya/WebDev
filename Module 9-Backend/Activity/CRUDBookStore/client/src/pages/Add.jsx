import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Add() {

  const [book,setBook] = useState({
    title : "",
    desc : "",
    price : null,
    cover : ""
  })

  // if after post/create date succcessfully - navigate to home page 
  const navigate = useNavigate()
  
  const handleChange = (e) =>{
    setBook(prev => ({...prev,[e.target.name]: e.target.value } ))
  }
  // name attribute val same as usestate obj key
  //console.log(book)

  const handleClick = async e => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8800/books",book)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='form'>
        <h1>Add New Book</h1>
        <input type="text" placeholder='title' onChange={handleChange} name='title' />
        <input type="text" placeholder='desc' onChange={handleChange} name='desc' />
        <input type="text" placeholder='price' onChange={handleChange} name='price' />
        <input type="text" placeholder='cover' onChange={handleChange} name='cover' />
        <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add