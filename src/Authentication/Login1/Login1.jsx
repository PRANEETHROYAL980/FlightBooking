import React, {  useEffect, useState } from 'react'
import travel from './Assets/travel.png'
import registerimg from './Assets/registerimg.png'
import registerlogo from './Assets/registerlogo.png'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios';
import { Userdetails } from '../../Reducx/Slice'
const Login1 = () => {
  const dispatch = useDispatch();
  const [login,setlogin]=useState({
    user:'',
    password:''
  })
  const[recieveddata,setrecieveddata]=useState('');
  const[recieveddata1,setrecieveddata1]=useState('');
  const Navigate = useNavigate()
  const data1= useSelector(state=>state.Form.flightdata[0])
      // console.log(data1)
      // console.log(recieveddata)
  function handlelogin(e){
    setlogin({...login,[e.target.name]:e.target.value})
  }
  console.log(login)
  const getdata = async () => {
    try {
      const recieveddata = await axios.get('https://redux-flight-server.onrender.com/users');
      const recieveddata1 = await axios.get('https://redux-flight-server.onrender.com/Admin');
      setrecieveddata(recieveddata.data);
      setrecieveddata1(recieveddata1.data)
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
   
    getdata();
  }, []);
  function handlesubmit(e){
    e.preventDefault();
    dispatch(Userdetails([login]))
    const finddata=recieveddata.find(item=>item.password == login.password && item.email == login.user  );
    const finddata1=recieveddata1.find(item=>item.password == login.password && item.email == login.user) ;
    if (finddata || finddata1){
      if(finddata){
      Navigate('/');
      }
      else{
        Navigate('/Admin')
      }
    }
    else{
      alert('Details Not Found')
    }
  }

  return (
    
    <div>
      <div className='register'>
        <div className='register1'>
            <img src={registerlogo}/>
            <img src={registerimg}/>
        </div>
        <div className='register2'>
            <div className='register2-1' style={{width:"52%"}}>
                <img src={travel} alt=''/>
            <div className='register2-2'>
                <form>
                    <h3>Login</h3>
                    <p>Login to access yourEasyset24  account</p>
                    <p>Email</p>
                    <input type='email'
                    placeholder='EasySet24@Gmail.com'
                    value={login.user}
                    name='user'
                    onChange={handlelogin}
                    />
                    <p>Password</p>
                    <input type='password'
                     placeholder='**********'
                     value={login.password}
                     name='password'
                     onChange={handlelogin}/>
                    <div style={{display:'flex',justifyContent:'center',alignItems:"center",gap:"100px"}}>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
                        <input type='checkbox'/>
                        <p>Remember Me</p>
                    </div>
                    <span>Forgot password?</span>
                    </div>
                    <button onClick={handlesubmit}>Login</button>
                    <p>Don't have account in EasySet24 Yet? <Link to='/Register'><span>Register</span></Link> !</p>
                </form>
            </div>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Login1

