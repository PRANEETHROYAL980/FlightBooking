import { configureStore } from "@reduxjs/toolkit";
import Rreducer from './Registerslice'
import Freducer from './Slice'
import Greducer from './getslice'
const Store = configureStore({
    reducer:{
        Form : Freducer,
        register : Rreducer,
        Get:Greducer
    }
})
export  default Store;