import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
const initialState ={
    flightdata:[],
    loading:false,
    error:null
}
export const fetchdata1= createAsyncThunk('fetchdata1',async()=>{
    try{
      const response =  await axios.get('https://redux-flight-server.onrender.com/flight')
      return response.data
    }
    catch(err){
        console.log(err)
    }
});
const Getslice = createSlice({
    name:'Get',
    initialState,
     extraReducers:(builder)=>{
            builder.addCase(fetchdata1.pending,(state,action)=>{
                state.loading=true,
                state.error=null
            }),
            builder.addCase(fetchdata1.fulfilled,(state,action)=>{
                state.flightdata.push(action.payload),
                state.loading=false,
                state.error=null;
            }),
            builder.addCase(fetchdata1.rejected,(state,action)=>{
                state.loading=false,
                state.error=action.error.message || 'failed to fetch the data'
            })
        }
  
})

export default Getslice.reducer;