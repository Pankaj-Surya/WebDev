import {createStore} from "redux"
import { combineReducers } from "redux"
import BatReducer from './BatReducer'
import BallReducer from "./BallReducer"
//const store = createStore(BatReducer)




const store = createStore(BatReducer)

export default store