let initialState = {
    userState : "",
    loading : true
}


function userReducer(state=initialState,action){
    switch(action.types){
        case "setUser": return {
           
        }
        case  "setError":return{

        }
        default : return{
            state
        }
    }
}
 
export default userReducer