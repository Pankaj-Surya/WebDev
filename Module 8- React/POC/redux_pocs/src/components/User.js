import React,{useEffect,useState} from 'react'
import axios from "axios"
import { connect } from 'react-redux';

import { getUserMidlleWare1 } from '../redux/user/userMiddleWare';
function User(props) {

    console.log(props)
    // const [users,setUsers]=useState([]);
    // const [loading,setLoading]=useState(true)
    // const [error,setError]=useState("")

  
  


    // useEffect(()=>{
    //     async function fn(){
    //         try {
    //           let res =await axios.get("https://jsonplaceholder.typicode.com/users")
    //           console.log(res)
    //           console.log("after api call")
    //           let data = res.data
           
    //         setUsers(data)
    //         setLoading(false)
    //         } catch (error) {
    //           setError(error.message)
    //           setLoading(false)
    //         }
    //       }
    //       fn();   
    
    // },[])

    const loading = props.loading;
    const user = props.userState;
    
    useEffect(() => {
        props.User.fetchFn;
        console.log("fffff")
    }, [])

    console.log("------->",props.userData.userState)
    
    return (
        <>
            {loading == true
                ? <h1>...Loading</h1> :
                <h2>userData :{props.userData.userState}</h2>}
        </>
    )
}


function mapStateToProps(state){
   return{
    userData:state.User
   }
}

function mapDispatchToProps(dispatch){
  return {
    fetchFn : () =>{
        let innerFn = getUserMidlleWare1;
        dispatch(getUserMidlleWare1)
    }
  }
}



export default connect(mapStateToProps,mapDispatchToProps) (User)