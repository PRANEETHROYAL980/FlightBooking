import React from 'react'
import './Navsub.css'
import flight from './Assets/flight.png'
import calendar from './Assets/calendar.png'
import people from './Assets/people.png'
import arrow from './Assets/arrow.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navsub = () => {
    const navigation = useNavigate();
    // const data = useSelector(state=>(state.Form.jsondata.users))
        const data = useSelector(state=>(state.Form.flightdata[0]))
    
    const User = useSelector(state=>(state.Form.user));
    const found1 = data.find(item=>item.email == User[0]?.[0]?.user)
    function handlebook(){
        if(found1){
            navigation('/Book')
        }
        else{
            alert("Login to Book the flight")
            navigation('/Login')  
        }
    }
  return (
    <div>
      <div className='Navsub'>
        <div className='Navsubhead'>
        <h1>Which exciting place is your next adventure taking you?</h1>
        <p>Discover exclusive Genius rewards wherever your journey takes you!</p>
        </div>
        <div className='Navsub1'>
            <div className="Navsub1-1">
                <h3>From-To</h3>
                <div className='Navsub1-2'>
                    <img src={flight} alt=''/>
                    <p>Gutenberg - Istanbul</p>
                </div>
            </div>
            <div className="Navsub1-1">
                <h3>Trip</h3>
                <div className='Navsub1-2'>
                    <p>Two Way</p>
                    <img src={arrow} alt=''/>
                </div>
            </div>
            <div className="Navsub1-1">
                <h3>Passengers-Flight Class</h3>
                <div className='Navsub1-2' style={{gap:"30px"}}>
                    <div className="Navsub1-21">
                        <img src={people} alt=''/>
                        <p>2 Adults-3 Childrens</p>
                    </div>
                    <div className="Navsub1-21">
                        <p>Economy</p>
                        <img src={arrow} alt=''/>
                    </div>
                </div>
            </div>
            <div className="Navsub1-1">
                <h3>Depature-Return</h3>
                <div className='Navsub1-2'>
                    <img src={calendar} alt="" />
                    <p>18 Dec 2023 - 23 Dec 2023  </p>
                </div>
            </div>
            <button onClick={handlebook}>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Navsub
