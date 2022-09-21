



export function signInMiddleware(email,password){

    
    return async function (dispatch,getStore,{getFirebase}){

         // how are you going to get auth to your middleware 

         try {
            let firebase = getFirebase();
            let auth = firebase.auth()
            let userCreds = await auth.signInWithEmailAndPassword(email, password);
            console.log("user logged In",userCreds);    
            dispatch({
                type: "LOGIN_SUCCESS"
            })
        } catch (err) {
            alert(err.message);
            dispatch({ type: "LOGIN_FAILURE", payload: err.message})
        }
    }
}

