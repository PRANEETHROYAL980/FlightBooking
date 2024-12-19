import React from 'react'
import './Footer.css'
import footerpay from './Assets/footerpay.png'
import footersocial from './Assets/footersocial.png'
const Footer = () => {
  return (
    <div>
      <div className='Footer'>
        <div className='Footer1'>
            <div className="Footer1-1">
                <h1>About us</h1>
                <p>Our Story</p>
                <p>Work With Us</p>
                <p>Press & Media</p>
                <p>Privacy & Security</p>
            </div>
            <div className="Footer1-1">
                <h1>We Offer</h1>
                <p>Trip SponsorShip</p>
                <p>Last Minutes Flight</p>
                <p>Best Deals</p>
                <p>Ai-Driven Search</p>
            </div>
            <div className="Footer1-1">
                <h1>Headquaters</h1>
                <p>England</p>
                <p>France</p>
                <p>Canada</p>
                <p>Iceland</p>
            </div>
            <div className="Footer1-1">
                <h1>Travel Blogs</h1>
                <p>Bali Travel Guide</p>
                <p>Sri Travel Guide</p>
                <p>Peru Travel Guide</p>
                <p>Swiss Travel Guide</p>
               
            </div>
            <div className="Footer1-1">
                <h1>Activities</h1>
                <p>Tour Leading</p>
                <p>Cruising & Sailing </p>
                <p>Camping</p>
                <p>KayaKing</p>
            </div>
            <div className="Footer1-1" style={{gap:'10px'}}>
                <h1>Service</h1>
                <p>Report Error</p>
                <p>Ask Online</p>
                <p>Travel Insurance</p>
            </div>
        </div>
        <div className='Footer2'>
            <img src={footerpay}/>
            <img src={footersocial}/>
            <div>
                <p>Email</p>
                <input type='email' placeholder='Enter Your Email'/>
                <button>Subscribe</button>
            </div>
        </div>
      </div>
      <div className='Footer2-1'>
        <p>Copyrights EasySet24</p>
        <p>EasySet24@Gmail.com</p>
        <h4>"EasySet24: Seamless Journeys, Unrivalled Travel Wisdom!"</h4>
        <p>Location: 123 Oxford Street,London.</p>
        <p>Ph.No: +44 20 7123 4567</p>
      </div>
    </div>
  )
}

export default Footer
