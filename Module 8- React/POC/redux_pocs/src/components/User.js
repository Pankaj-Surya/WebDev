import React,{useEffect,useState} from 'react'
import axios from "axios"

function User() {
    const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState("")

  
  


    useEffect(()=>{
        async function fn(){
            try {
              let res =await axios.get("https://jsonplaceholder.typicode.com/users")
              console.log(res)
              console.log("after api call")
              let data = res.data
           
            setUsers(data)
            setLoading(false)
            } catch (error) {
              setError(error.message)
              setLoading(false)
            }
          }
          fn();   
    
    },[])
    return (
        <>
          <div>User</div>
          {
              loading ? <h1>Loading....</h1> : error != "" ? <h1>{error}</h1> :
              <ul>
                {
                    users.map((user)=>(<li>{user.name}</li>))
                }
              </ul>
          }
        
        </>
  
    

  )
}

export default User