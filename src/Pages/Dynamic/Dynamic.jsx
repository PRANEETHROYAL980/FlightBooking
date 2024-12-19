import React, { createContext, useContext } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import FCO from './Assets/FCO.png'
import Airplane from './Assets/Airplane.png'
import Dynamic4 from './Assets/Dynamic4.png'
import Icons from './Assets/Icons.png'
import pay from './Assets/pay.png'
import './Dynamic.css'
// import Payment from '../Payment/Payment'
export const Context = createContext();



const Dynamic = () => {
   const {id} = useParams();
  //  console.log(id)
  //  const data1 = useSelector(state=>(state.Form.jsondata.flight));
       const data=useSelector(state=>state?.Get.flightdata[0]);
  //  console.log(data)
   const Find = data?.find(item=>(item.id==id))
  //  console.log(Find)
  const navigate = useNavigate()
    function handlepay(){
    navigate(`/payment/${id}`)
  }
  
   

 
  return (
    <div>
      
      
 
      <Nav/>
     
      <div className='Dynamic'>
     {
      [Find]?.map((item,index)=>(
        <div key={index} className='Dynamicsub'>
          <div className='Dynamic-1'>
            <h1>One Stop,3h between</h1>
            <h1>Flight-Duration: {item?.Time}</h1>
          </div>
          <div className='Dynamic-2'  style={{backgroundImage:`url(${item?.Image})`}}></div>
          <div className='Dynamic-3'>
            <div className="Dynamic-31">
              <h1>From: {item?.From}</h1>
              <h3>{item?.Departure}</h3>
              <p style={{color:'blue'}}>Departure</p>
            </div>
          <img src={FCO} className='fco'/>
            <div className="Dynamic-32">
              <h1>To: {item.To}</h1>
              <h3>{item.Landing}</h3>
              <p style={{color:'blue'}}>Landing</p>
            </div>
          </div>
          <img src={Airplane} className='Airplane'/>
          <div className='Dynamic-4'>
            <img src={Dynamic4}/>
          </div>
          <div className='Dynamic-5'>
            <div className='Dynamic-5sub'>
            <h1 style={{color:'#4C9839'}}>{item.Price}</h1>
            <p>Taxes Included</p>
            </div>
            <img src={pay}/>
          </div>
          <div className='Dynamic-6'>
            <img src={Icons}/>
            <button onClick={handlepay}>Purchase The Ticket</button>
          </div>
        </div>
      ))
     }
     </div>
     <Footer/>

     {/* <Context.Provider value={Find}>
        {children}
      </Context.Provider> */}
 
    </div>
    
  )
}

export default Dynamic;

