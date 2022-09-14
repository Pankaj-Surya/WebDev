import {createStore} from "redux"
import { combineReducers } from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import BatReducer from './BatReducer'
import BallReducer from "./BallReducer"
//const store = createStore(BatReducer)


const rootReducer = combineReducers({
    Bat : BatReducer,
    Ball : BallReducer
})

const store = createStore(rootReducer,composeWithDevTools())


export default store