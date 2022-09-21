let initialState = {
    userState : "",
    loading : true
}


function userReducer(state=initialState,action){
    switch(action.types){
        case "setUser": return {
           userState : JSON.stringify(action.payload)   ,
           loading : false
        }
        case  "setError":return{
            userState : action.payload,
            loading : false
        }
        default : return{
            state
        }
    }
}
 
export default userReducer