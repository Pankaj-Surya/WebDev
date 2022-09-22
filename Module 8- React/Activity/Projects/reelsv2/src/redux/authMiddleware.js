import { storage } from "../firebase";

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
            dispatch({ type: "LOGIN_FAILURE", payload: err.message})
        }
    }
}

export function signOutMiddleware(){
    return async function (dispatch,getStore,{getFirebase}){

        // how are you going to get auth to your middleware 

        try {
           let firebase = getFirebase();
           let auth = firebase.auth()
           await auth.signOut();
           console.log("signout")
           dispatch({
               type: "SIGNOUT_SUCCESS"
           })
       } catch (err) {
           dispatch({ type: "SIGNOUT_FAILURE", payload: err.message})
       }
   }
}


export function signUpMiddleWare(userDataObj) {
    return async function (dispatch, getStore, { getFirebase, getFirestore }) {
        try {
            
            // // 1. signup hoga

            let firebase = getFirebase();
            let firestore = getFirestore();
            let auth = firebase.auth()
            const userCreds = await auth
                .createUserWithEmailAndPassword
                (userDataObj.email, userDataObj.password);
            const userId = userCreds.user.uid;
            alert("user signed up");
            // 2. uploading user image

            const uploadtask = storage.ref(`/users/${userId}/profileImage`).put(userDataObj.filePath);
            uploadtask.on("state_changed", progressCb, errorCb, successCb)
            function progressCb(snapShot) {
                var progress = (
                    snapShot.bytesTransferred /
                    snapShot.totalBytes) * 100;
                console.log("Progress: ", progress, "%");
            }
            function errorCb(err) {
                console.log(err.message);
                console.log(err.payload);
            }
            async function successCb() {
                // image upload -> complete
                // img url
                let imgUrl = await uploadtask.snapshot.ref.getDownloadURL()
              
                const getCurrentTimeStamp = firebase
                    .firestore
                    .FieldValue
                    .serverTimestamp
                
                //  doc -> img url -> upload -> firestore
                let docSnap = await firestore.collection("users").doc(userId).set({
                    name: userDataObj.name,
                    email: userDataObj.email,
                    createdAt: getCurrentTimeStamp(),
                    profileImageLink: imgUrl
                })
                dispatch({ type: "SIGNUP_SUCCESS" })
            }
        } catch (err) {
            dispatch({ type: "SIGNUP_FAILURE", payload: err.message })
        }
    }
}