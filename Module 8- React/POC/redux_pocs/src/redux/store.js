import {createStore} from "redux"
import { combineReducers, applyMiddleware,compose  } from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import BatReducer from './BatReducer'
import BallReducer from "./BallReducer"
import userReducer from "./user/userReducer"
import thunk from "redux-thunk"

//1. only one reducer
//const store = createStore(BatReducer)


//2. combined reducer
const rootReducer = combineReducers({
    Bat : BatReducer,
    Ball : BallReducer,
    User : userReducer
})

const store = createStore(rootReducer,compose(applyMiddleware(thunk)))

export default store