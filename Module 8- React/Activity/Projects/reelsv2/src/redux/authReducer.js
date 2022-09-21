const initialAuth = {
    authError : null,
    isLoggedIn: false
}


function authReducer(state=initialAuth,action){

    switch(action.type){
     
    case "LOGIN_SUCCESS" : return {
       authError : null,
       isLoggedIn : true         
        
    }

    case "LOGIN_FAILURE" : return {
       authError : action.payload,
       isLoggedIn : false
    }

     default : return {
         state
     }
    
    }
    
}


export default authReducer;