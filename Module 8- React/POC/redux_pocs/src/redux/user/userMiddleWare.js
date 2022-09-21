import axios from "axios";

export async function getUserMidlleWare1(dispatch){

   return  async function fn(){
        try {
          let res =await axios.get("https://jsonplaceholder.typicode.com/userss")
          console.log(res)
          let userData = res.data
          dispatch({type :"setUser",payload:userData})
        } catch (error) {
          dispatch({type:"setError",payload:"error.message"})
        }
   }
}


export default getUserMidlleWare1