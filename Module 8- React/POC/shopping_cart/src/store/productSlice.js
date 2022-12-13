const { createSlice } = require('@reduxjs/toolkit');

export const STATUSES  = Object.freeze({
    IDLE:"idle",
    LOADING:"loading",
    ERROR:"error"
})

const productSlice = createSlice({
    name: 'cart',
    initialState: {
        data : [],
        status : STATUSES.IDLE 
    },
    reducers :{
        setProduct(state,action){
           // old redux - to avoid the sideeffects
           state.data = action.payload
        },
        setStatus(state,action){
           // direct changes/mutate in the state 
           //  state = state.filter((item)=>item.id !== action.payload)
           state.status = action.payload;
        }
    }
})

export const {setProduct,setStatus} = productSlice.actions;
export default productSlice.reducer;

// thunk
export function fetchProducts(){
    return async function fetchProductThunk(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(setProduct(data))
            dispatch(
                (setStatus(STATUSES.IDLE)))
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}
