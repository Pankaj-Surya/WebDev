const initialAuth = {
    user : null,
    loggedIn: false
}


function authReducer(state=initialAuth,action){

    switch(action.type){
    
     default : return {
         state
     }
    
    }
    
}


export default authReducer;