const { createSlice } = require('@reduxjs/toolkit');

//const intialState = [];

// cartSLice
// 1.name : cart
// 2.intialState  
// 3.reducers - change the state
//              has the action fn to change the state
//              action is pure function

const cartSlice = createSlice({
    name: 'cart',
    intialState:[],
   
    reducers :{
        add(state,action){
           // old redux - to avoid the sideeffects
           //return [...state, action.payload]
           // directly mutating the state - allowed here
           // abstracting the above one syntax so allowed here
           console.log(state)
           console.log(action)
           state.push(action.payload)
        },
        remove(state,action){
           // direct changes/mutate in the state 
            state = state.filter((item)=>item.id !== action.payload)
        }
    }
})

export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;



