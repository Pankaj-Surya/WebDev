import {createStore,applyMiddleware} from "redux"
import authReducer from "./authReducer"
import {getFirebase, firebaseReducer} from "react-redux-firebase"
import thunk from "redux-thunk"
import {combineReducers} from "redux";

const rootreducer = combineReducers({
    auth: authReducer,
    firebase: firebaseReducer
})

const store = createStore(rootreducer,
    applyMiddleware
            (thunk.withExtraArgument({ getFirebase })));
            //redux binding for firebase );

export default store;