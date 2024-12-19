import React, { useEffect, useState } from 'react'
import Nav from '../../Components/Nav/Nav'
import Navsub from '../../Components/Nav/Navsub'
import Footersub from '../../Components/Footer/Footersub'
import Footer from '../../Components/Footer/Footer'
import flightimg from './Assets/flightimg.png'
import bag from './Assets/bag.png'
import  {useSelector} from 'react-redux'

import './Book.css'
import {  Link } from 'react-router-dom'
const Book = () => {
    const[pagestate,setpagestate]= useState({
        start:0,
        end:3
    })
    function handlenext(){
        if(pagestate.start>=9 ){
            setpagestate({
                start:9,
                end:12
            })
        }
        else{
            console.log(pagestate)
        setpagestate({
            start:pagestate.start+3,
            end: pagestate.end+3
        })
    }}
    function handleprev(){
        if(pagestate.start<=0){
            setpagestate({
                start:0,
                end:3
            })
        }
        else{
            setpagestate({
                start:pagestate.start-3,
                end:pagestate.end-3
            })
        }
    }
    function handle1(){
        setpagestate({start:0,end:3})
    }
    function handle2(){
        setpagestate({start:3, end:6})
    }
    function handle3(){
        setpagestate({start:6,end:9})
    }
    function handle4(){
        setpagestate({start:9,end:12})
    }
    // const fetchedjsondata1= useSelector(state=>(state.Form.jsondata.flight));
        const fetchedjsondata=useSelector(state=>state.Get.flightdata[0]);
    
    const slicedData = fetchedjsondata?.slice(pagestate.start,pagestate.end);

  return (
    <div>
        <Nav/>
        <Navsub/>
      <div className='Bookflight'>
        <div className='filter'></div>
        <div className="Bookmain">
        {
            slicedData?.map((item,index)=>(
                <div key={index} className='Book '>
                    <div className='Booking'>
                        <img src={item.Image} alt="" />
                    </div>
                    <div className='Booksection'>
                    <div className='Book1'>
                        <h1>From:<span >{item.From}</span></h1>
                        <div className='Book1-1'>
                            <img src={flightimg} alt=''/>
                            <h3>Trip-Duration:{item.Time}</h3>
                        </div>
                        <h1>To:<span>{item.To}</span></h1>
                    </div>
                    <div className='Book2'>

                            <div className="Book2-1">
                                <h3>{item.Departure}</h3>
                                <p style={{color:"#07689F"}}>Depature</p>
                                <div className="Book2-11">
                                    <img src={bag} alt=''/>
                                    <h1>{item.From}</h1>
                                </div>
                            </div>
                            <div className="Book2-2">
                                <h3>{item.Landing}</h3>
                                <p style={{color:"#07689F"}}>Landing</p>
                                <div className="Book2-11">
                                    <h1>{item.To}</h1>
                                    <img src={bag} alt=''/>
                                </div>
                        
                        </div>
                    </div>
                    <div className="Book3">
                        <h1 style={{color:"#4C9839"}}>{item.Price}</h1>
                        <h2>{item.Vacany} Vacant Seats</h2>
                        <h2>31% Less Carbondioxide</h2>
                        <Link to={`/Book/${item.id}`}><button>View Details</button></Link>
                    </div>
                 </div>
                </div>
            ))
        }
          
        </div>
      
      </div>
      <div className='pagination'>
            <h1 onClick={handleprev}>Prev</h1>
            <h1 onClick={handle1}>1</h1>
            <h1 onClick={handle2}>2</h1>
            <h1 onClick={handle3}>3</h1>
            <h1 onClick={handle4}>4</h1>
            <h1 onClick={handlenext}>Next</h1>
        </div>
      <Footersub/>
      <Footer/>
    </div>
  )
}

export default Book
