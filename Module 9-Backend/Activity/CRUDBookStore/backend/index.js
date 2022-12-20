import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test',
    password : "pankaj123",
    port: "3350",

})

// if there is auth problem
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by 'pankaj123'
//    password : ""

// allow express  : send any json file from client (Postman post request)
app.use(express.json())
// backend server not allowing to user our backend API
app.use(cors())
app.get('/', (req, res) => {
    res.json("hello this is backend")
})

app.get('/books', (req, res) => {
    const q = "SELECT * FROM books"
    db.query(q, (err, data) => {
        if (err) { return res.json(err) }
        return res.json(data)
    })
})

app.post('/books', (req,res)=>{
//const values =["title from backend","desc from backend","cover pic from backend"]
const q = "INSERT INTO books(`title`, `desc`, `price`, `cover`) VALUES (?)";

const values = [
  req.body.title,
  req.body.desc,
  req.body.price,
  req.body.cover,
];

db.query(q,[values],
    (err, data) => {
        if (err) { return res.json(err) }
        return res.json("book has been created successfully")
        //return res.json(data)
})

})

app.delete('/books/:id', (req,res)=>{
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE id = ?";
 
  db.query(q,[bookId],
    (err, data) => {
        if (err) { return res.json(err) }
        return res.json("book has been deleted successfully")
        //return res.json(data)
})
})

app.put('/books/:id', (req,res)=>{

    const bookId = req.params.id;
    //const values =["title from backend","desc from backend","cover pic from backend"]
    const q = "UPDATE books SET `title`=?, `desc`=?, `price`=?, `cover`=? WHERE id = ?";
    
    const values = [
      req.body.title,
      req.body.desc,
      req.body.price,
      req.body.cover,
    ];
    
    db.query(q,[...values,bookId],
        (err, data) => {
            if (err) { return res.json(err) }
            return res.json("book has been updated successfully")
            //return res.json(data)
    })
    
    })
app.listen(8800, () => {
    console.log("connected to backend")
})

