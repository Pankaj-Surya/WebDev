import {createStore} from "redux"
import authReducer from "./authReducer"
import  {applyMiddleware} from "redux"
import {getFirebase} from "react-redux-firebase"


import {reduxFirestore ,getFirestore} from "re"


const reduxStore = createStore(authReducer,applyMiddleware(thunk.withExtraArgumnet({getFirebase,getFirestore})))