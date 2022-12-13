const { createSlice,createAsyncThunk} = require('@reduxjs/toolkit');

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
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchProducts.pending, (state, action) => {
    //             state.status = STATUSES.LOADING;
    //         })
    //         .addCase(fetchProducts.fulfilled, (state, action) => {
    //             state.data = action.payload;
    //             state.status = STATUSES.IDLE;
    //         })
    //         .addCase(fetchProducts.rejected, (state, action) => {
    //             state.status = STATUSES.ERROR;
    //         });
    // },
})

export const {setProduct,setStatus} = productSlice.actions;
export default productSlice.reducer;

// thunk
// export const fetchProducts = createAsyncThunk('products/fetch', async () => {
//     const res = await fetch('https://fakestoreapi.com/products');
//     const data = await res.json();
//     return data;
// });


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
