import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './Login.css'
import registerimg from '../Login/Assets/registerimg.png'
import registerlogo from '../Login/Assets/registerlogo.png'
import travel from '../Login/Assets/travel.png'
import { register } from '../../Reducx/Slice'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
    const [registerdata, setregister] = useState({
        first: '',
        last: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const [confirmpass,setpass]=useState('');
    function handleconfirm(e){
        setpass(e.target.value)
    }
    function handlechange(e) {
        setregister({...registerdata, [e.target.name] : e.target.value})
    }

    const data = useSelector((state)=>(state.Form.Data))
    
    const dispatch = useDispatch();
   
    function handleclick(e){
        e.preventDefault()
       
        {
        if ( confirmpass == registerdata.password && registerdata.first!="" && registerdata.last!="" && registerdata.email!="" && registerdata.password!="" ) {
            dispatch(register(registerdata));
            Postdata();
            alert("Registered succesfully")
            navigate('/Login')
          
          } 
          else {
            alert('Enter the details');
          }
        }
        
    }
    const Postdata = async () => {
        try {
          const posteddata = await axios.post('https://redux-flight-server.onrender.com/users',  registerdata);
          console.log('Data posted successfully:', posteddata.data);
        } catch (e) {
          console.log(e); 
        }
      };
    // useEffect(()=>{
    // console.log(data);

    // },[data])

    

    return (
        <div>
            <div className='register'>
                <div className='register1'>
                    <img src={registerlogo} alt='' />
                    <img src={registerimg} alt='' />
                </div>
                <div className='register2'>
                    <div className='register2-1'>
                        <img src={travel} alt='' />
                        <div className='register2-2'>
                            <form>
                                <h3>Register</h3>
                                <div style={{ display: 'flex', gap: '50px' }}>
                                    <div>
                                        <p>First Name</p>
                                        <input type='text' 
                                        placeholder='EastSet24'
                                         name='first'
                                          value={registerdata.first}
                                           onChange={handlechange} />
                                    </div>
                                    <div>
                                        <p>Last Name</p>
                                        <input type='text'
                                         placeholder='EastSet24'
                                         name='last'
                                         onChange={handlechange}
                                         value={registerdata.last} />
                                    </div>
                                </div>
                                <p>Email</p>
                                <input type='email'
                                 placeholder='EasySet24@Gmail.com'
                                 name='email'
                                 onChange={handlechange} 
                                 value={registerdata.email} />
                                <p>Password</p>
                                <input type='password'
                                 placeholder='*********'
                                 name='password'
                                 onChange={handlechange}
                                 value={registerdata.password} />
                                <p>Confirm Password</p>
                                <input type='password' placeholder='*********' value={confirmpass} onChange={handleconfirm} />
                                <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <input type='checkbox' />
                                    <p>I agree to all the Terms and Privacy Policies</p>
                                </div>
                               <button onClick={handleclick}> <Link to='/' style={{color:'white'}}>Register Now</Link></button>
                                <p>Already have a account? <Link to='/Login'><span>Login</span></Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
