import React from 'react'
import './Hero.css'
import Hero1img from './Assets/Hero1img.png'
import Hero2 from './Assets/Hero2.png'
import Hero3 from './Assets/Hero3.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Hero = () => {
    const navigation = useNavigate();
  const data = useSelector(state=>(state.Form.jsondata.users))
    const User = useSelector(state=>(state.Form.user));
    const found1 = data.find(item=>item.email == User[0]?.[0]?.user)
    function handlebook(){
        if(found1){
            navigation('/Book')
        }
        else{
            alert("Login to book the flight")
            navigation('/Login')  
        }
    }
    return (
        <div>
            <div className="Hero1">
                <img src={Hero1img} />
            </div>
            <div className="Hero2">
                <div className="Hero2-1">
                    <div className='Hero2-11'>
                        <h1>Let's Travel together</h1>
                        <p>Discover the latest offers and news and start planning your next trip with us.</p>
                    </div>
                    <button>See All</button>
                </div>
                <div className='Hero2-2'>
                    <img src={Hero2} alt="" />
                </div>
            </div>
            <div className="Hero3">
                <div className="Hero3-1">
                    <div className="Hero3-11">
                        <h1>Fall into Travel</h1>
                        <p style={{ color: '#07689F' }}>Review Affordable EasySet 24 Trip Packages</p>
                    </div>
                    <div className="Hero3-12">
                        <p>Going somewhere to celebrate this season? Whether you're going home or somewhere to roam, we've got the travel tools to get you to your destination.</p>
                        <button>See All</button>
                    </div>
                </div>
                <div className="Hero3-2">
                    <div className="Hero3-21">
                        <div className='Hero3-211'>
                            <div  className='Hero3-2sub' >
                                <h6>From</h6>
                                <p>$700</p>
                            </div>
                            <h2>Backpacking South Of Asia ... </h2>
                        </div>
                        <p>  <span>    Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life.</span>
                         <span>  Relaxing through an organized trip , helps us to forget about our problems, frustrations, and fears at home.</span>
                          <span>  During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living. </span></p>
                        <button onClick={handlebook}>Book Flight</button>
                    </div>
                    <div className="Hero3-22">
                        <img src={Hero3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
