import React, { useContext } from 'react'
import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'
import './Payment.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Payment = () => {
    const {id} = useParams();
    // const data = useSelector(state=>(state.Form.jsondata.flight));
           const data=useSelector(state=>state?.Get.flightdata[0]);
    
    const Find = data.find(item=>(item.id==id));
  return (
    <div>
      <Nav/>
        {
            [Find].map((item,index)=>(
                <div className='paymain' key={index}>
      <div className='pay'>
        <div className="pay-1">
            <div className='pay-11'>
            <h1>Information You need to pay attention .</h1>
            <h6>Passengers are divided according to age categories .</h6>
            <p>Please Check Categories</p>
            </div>
            <div className="pay-12">
                <div className='pay-121'>
                    <h3>One stop, 3h Between</h3>
                    <h3>Flight Duration:  {item.Time}</h3>
                </div>
                <div className="pay-122">
                    <img src={item.Image}/>
                </div>
            </div>
            <div className='pay-13'>
                <h1>Your Trip Summary</h1>
                <div className='pay-13p'>
                <p>Your flight take off from ARN Gate 23A , you Enter through C Entrance. </p>
                <p>In FCO Airport in Rome You will stay 3h &45m then Exit through Gate D14 .</p>
                <p>Final Destination will be SABIHA Airport and You can Exit Through L Door .</p>
                </div>
                <div className="pay-131">
                    <select>
                        <option>Very Good</option>
                        <option>Good</option>
                        <option>Average</option>
                        <option>Bad</option>                        
                    </select>
                    <p>Sustainability</p>
                </div>
            </div>
        </div>
        <div className="pay-2">
            <div className='pay-2h'>
            <h1>Payment Methods And Information</h1>
            <h3>Price Details</h3>
            </div>
            <div className="pay-21">
                <h6>2 Adults</h6>
                <h6>3 Childrens</h6>
                <h6>1 Infants</h6>
            </div>
            <div className="pay-22">
                <h3>Total(USD)</h3>
                <p style={{color:'green',fontSize:'18px',fontWeight:'500'}}>{item.Price}</p>
            </div>
            <div className="pay-23">
                <div className="pay-231">
                <input type='radio'/>
                <h2>Booking For Work</h2>
                </div>
                <div className="pay-232">
                    <h1>Payment Methods </h1>
                    <select>
                        <option>Paypal</option>
                        <option>Phonepe</option>
                        <option>Card</option>
                        <option>Paytm</option>
                    </select>
                </div>
            </div>
            <div className="pay-24">
                    <div className="payinput">
                       <h1> First Name<span style={{color:'red'}}>*</span></h1>
                        <input type='text ' placeholder='Anna'/>
                    </div>
                    <div className="payinput">
                   <h1> Last Name<span style={{color:'red'}}>*</span></h1>
                    <input type='text ' placeholder='Carinna'/>
                    </div>
                    <div className="payinput">
                   <h1> Ph.No:<span style={{color:'red'}}>*</span></h1>
                    <input type='text ' style={{width:'150px'}} placeholder='+12-23-245-523'/>
                    </div>
            </div>
            <div className='pay-25'>
                    <div className="payinput">
                       <h1>Card No: <span style={{color:'red'}}>*</span></h1>
                        <input style={{width:'150px'}} type='text ' placeholder='******************'/>
                    </div>
                    <div className="payinput">
                   <h1> Cvv <span style={{color:'red'}}>*</span></h1>
                    <input type='number ' style={{width:'60px'}} placeholder='***'/>
                    </div>
                    <div className="payinput">
                   <h1> Exp Date<span style={{color:'red'}}>*</span></h1>
                    <input type='text 'style={{width:'80px'}} placeholder='**/**'/>
                    </div>
            </div>
            <div className='pay-26'>
                <h1>Cancellation Policy</h1> 
                <p>Get a Full Refund If You Cancel By Jun 23 (PDT) .</p>
            </div>
            <div className="pay-27">
                <div className="pay-271">
                    <button>Confirm and Pay</button>
                    <p>Check your information before submitting .</p>
                </div>
                <div className="pay-272">
                    <button>Save If You Like It</button>
                    <p>Save your flight info , find it through Shortcut.</p>
                </div>
            </div>
        </div>
      </div>
      </div>
            ))
        }
      <Footer/>
    </div>
  )
}

export default Payment
