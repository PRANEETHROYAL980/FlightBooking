import React, { useEffect } from 'react'
import Login from './Authentication/Login/Login'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login1 from './Authentication/Login1/Login1'
import './App.css'
import Home from './Pages/Home/Home'
import Book from './Pages/Book/Book'
import Dynamic from './Pages/Dynamic/Dynamic'
import Payment from './Pages/Payment/Payment'
import Admin from './Pages/Admin/Admin'
import { useDispatch, useSelector } from 'react-redux'
import { fetchdata } from './Reducx/Slice'
import { fetchdata1 } from './Reducx/getslice'
const App = () => {
  const select = useSelector(state=>(state.Form.Mode));
  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(fetchdata());
    dispatch(fetchdata1())
  },[])
 
  return (
    <div className={select ? "Dark" : "light" }>
      <Router>
        <Routes>
          <Route path='/Register' element={<Login/>}/>
          <Route path='/login' element={<Login1/>} />
          <Route path='/' element={<Home/>}/>
          <Route path='/Book' element={<Book/>}/>
          <Route path='/Book/:id' element={<Dynamic/>}/>
          <Route path='/Payment/:id' element={<Payment/>}/>
          <Route path='/Admin' element={<Admin/>} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
