import React, { useContext, useState } from 'react'
import Navlogo from './Assets/navlogo.png'
import Navsearch from './Assets/Navsearch.png'
import Navsymbol from './Assets/Navsymbol.png'
import user from './Assets/user.png'
import { Modeclick } from '../../Reducx/Slice'
import './Nav.css'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

const Nav = () => {
  const navigate = useNavigate()
  const Dispatch = useDispatch()
  function handlelogin(){
    alert("Logged Out Succesfully")
    navigate('/Login')
  }
  function handlelogin1(){
    navigate('/Login')
  }
  function handlemode(){
    Dispatch(Modeclick())
  }
  const select = useSelector(state=>(state.Form.Mode));
  const data = useSelector(state=>(state.Form.jsondata.users))
  const data1= useSelector(state=>state.Form.flightdata[0])
      // console.log(data1)
  const User = useSelector(state=>(state.Form.user));
  // console.log(User)
  const found1 = data.find(item=>item.email == User[0]?.[0]?.user)
  const found2 = data1?.find(item=>item.email == User[0]?.[0]?.user)
  // console.log(found1)
  return (
    <div>
      <div className='Nav'>
        <img src={Navlogo}/>
        <div className='Navinput'>
        <input type='text' placeholder=''/>
        <img src={Navsearch} className='searchimg'/>
        </div>
        <div className='Navimages'>
            <img src={Navsymbol}/>
            <div className='Navimages1'>
            <img style={{height:'40px'}} src={user}/>
            { found2 ? <h1>{found2.first + " " + found2.last}</h1> : <h1 style={{cursor:'pointer'}} onClick={handlelogin1}>Login</h1>}
            
            <div className='Navimages2' style={{borderColor:select ? 'white' : 'black'}}>
              {
                select ? <h3 onClick={handlemode}>Light Mode</h3> : <h3 onClick={handlemode}>Dark Mode</h3>
              }
              <hr/>
              <h3 onClick={handlelogin}>Sign Out</h3>
            </div>
            </div>
        </div>
      
      </div>
    </div>
  )
}

export default Nav
