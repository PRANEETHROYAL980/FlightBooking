import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import json from '../../db.json'
import axios from "axios";
export const fetchdata= createAsyncThunk('fetchdata',async()=>{
    try{
      const response =  await axios.get('https://redux-flight-server.onrender.com/users')
      return response.data
    }
    catch(err){
        console.log(err)
    }
});


const initialState = {
    Data:[],
    jsondata:json,
    Mode:false,
    user:[],
    flightdata:[],
    loading:false,
    error:null,
    flight:[]
      
}
const Slice = createSlice({
    name:'Form',
    initialState,
    reducers:{
        register:(state,action)=>{
            state.Data.push(action.payload)
        },
        Modeclick:(state,action)=>{
            state.Mode=(!state.Mode)
        },
        Userdetails:(state,action)=>{
            state.user=[...state.user,action.payload]
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchdata.pending,(state,action)=>{
            state.loading=true,
            state.error=null
        }),
        builder.addCase(fetchdata.fulfilled,(state,action)=>{
            state.flightdata.push(action.payload),
            state.loading=false,
            state.error=null;
        }),
        builder.addCase(fetchdata.rejected,(state,action)=>{
            state.loading=false,
            state.error=action.error.message || 'failed to fetch the data'
        })
    }
})
export default Slice.reducer;
export const {register,Modeclick,Userdetails} = Slice.actions