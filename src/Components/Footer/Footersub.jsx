import React from 'react'
import footergoogle from './Assets/footergoogle.png'
import './Footersub.css'
const Footersub = () => {
  return (
    <div>
      <div className='Footersub'>
        <div className='Footersub1'>
            <h2>Go Further With The EasySet24 App</h2>
            <h4>Enjoy savings on chosen hotels and flights when you book through the EasySet24 website. Additionally, earn One Key Cash for every booking made through the app.</h4>
            <p>Secured By Europe GTP</p>
        </div>
        <img src={footergoogle}/>
      </div>
    </div>
  )
}

export default Footersub
