import express from "express"
import mysql from "mysql"

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

// allow express : send any json file from client
app.use(express.json())

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
const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES (?)"
//const values =["title from backend","desc from backend","cover pic from backend"]
const values =[
    req.body.title,
    req.body.desc,
    req.body.cover,
]

db.query(q,[values],
    (err, data) => {
        if (err) { return res.json(err) }
        return res.json("book has been created successfully")
        //return res.json(data)
})

})

app.listen(8800, () => {
    console.log("connected to backend")
})

