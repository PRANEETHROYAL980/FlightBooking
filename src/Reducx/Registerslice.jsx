import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    data:[]
}
const RegisterSlice = createSlice({
    name:'register',
    initialState,
    reducers:{
        addData:(state,action)=>{
            state.data=[state.data.push(action.payload)]
        }
    }
})

export default RegisterSlice.reducer;
export const {addData} = RegisterSlice.actions