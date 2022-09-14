import React,{useEffect,useState} from 'react'
import {database} from "../firbaseConfig"

//CRUD 

function Firebase() {
    const [name, setName] = useState("");
    const [age,setAge] = useState("")

    useEffect(()=>{
        async function fn()  {
        let uid ="2aLNPaL9hSodH09mShOA"
         //1.get particular
        //let res= await database.users.doc(uid).get() 
        
        let res= await database.users.get();
        res.forEach((obj) => console.log(obj.data()));
        console.log(res);
    }
    fn();
    },[])

    let createUserInDB = async() => {
       //let res= await database.users.add({name,age})
       // create command
       let res= await database.users.doc("1111111").set({name,age}) 
       console.log(res)
    }

    let updateUserInDB = async () => {

        let update= await database.users.doc("1111111").update({name,age})
   
    }

    let deleteUserInDB = async () => {
        let res= await database.users.doc("1111111").delete({name,age})
    }
    return (
    <>
    <div>firebase</div>
    <label htmlFor="">Name</label>
    <input type="text" style={{border:"2px solid black"}} value={name} onChange={(e)=>setName(e.target.value)} />
    <br />
    <label htmlFor="" >Age</label>
    <input type="number" style={{border:"2px solid black"}} value={age} onChange={(e)=>setAge(e.target.value)} />
    <br />
    <button style={{border:"2px solid black"}} onClick={createUserInDB}>Create</button>
    <button style={{border:"2px solid black"}} onClick={updateUserInDB}>update</button>
    <button style={{border:"2px solid black"}} onClick={deleteUserInDB}>delete</button>
    
    </>
    
  )
}

export default Firebase