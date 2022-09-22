import {createStore,applyMiddleware} from "redux"
import authReducer from "./authReducer"
import firebase from "../firebase"
import {getFirebase, firebaseReducer} from "react-redux-firebase"
import thunk from "redux-thunk"
import {combineReducers} from "redux";


import { reduxFirestore, getFirestore, } from "redux-firestore";

const rootreducer = combineReducers({
    auth: authReducer,
    firebase: firebaseReducer
})

const store = createStore(rootreducer,
    applyMiddleware
    (thunk.withExtraArgument({ getFirebase, getFirestore })),   

    );

export default store;