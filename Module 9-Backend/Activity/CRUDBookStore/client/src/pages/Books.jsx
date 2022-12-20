import React from 'react'
import { Link } from "react-router-dom"
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import ".././Style/add.css"

function Books() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books")
        setBooks(res.data)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllBooks()
  }, [])



  const handleDelte = async (id) => {
    try {
      await axios.delete("http://localhost:8800/books/" + id)
      // reloads the current URL, like the Refresh button.
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdate = async (id) => {
    try {
      await axios.put("http://localhost:8800/books/" + id)
      // reloads the current URL, like the Refresh button.
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='book__container'>
      <h1>CRUD Books Shop</h1>
      {/* Header */}
      <div className="header__section">
        <h3>List of Books</h3>
        <button className='addBtn'><Link  style={{ color: 'inherit', textDecoration: 'inherit', background: "inherit"}}   to="/add">Add New Book</Link></button>

      </div>

      {/*Books List */}
      <div className="books">
        {books.map(book => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover}></img>}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
            <button  className='delBtn' onClick={() => { handleDelte(book.id) }}>Delete</button>
            <button className='updtBtn' onClick={() => { handleUpdate(book.id) }}><Link style={{ color: 'inherit', textDecoration: 'inherit'}}   to={`/update/${book.id}`}>Update</Link></button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Books