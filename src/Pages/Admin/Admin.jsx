import React, { useEffect, useState } from 'react'
import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'
import { useSelector } from 'react-redux';
import axios from 'axios'
import './Admin.css'
import flightimg from './Assets/flightimg.png'
import bag from './Assets/bag.png'
import Book from '../Book/Book';
const Admin = () => {
    const data1 = useSelector(state => state.Form.jsondata.flight);
    const [state, setstate] = useState(true);
    const [id,setid]= useState("")
    const [state1,setstate1]=useState(false);
    const [fetch,setfetch]=useState(false);
    const [getdata,setdata]= useState({
        From:"",
        To:"",
        Departure:"",
        Landing:"",
        Time:"",
        Price:"",
        Airline:"",
        Image:"",
        Vacany:""
    })
    const flight=useSelector(state=>state.Get.flightdata[0]);
    const iddata1 = flight?.find(item=>item.Airline == id)
    // console.log(iddata1.id)
    // console.log(flight)
    const iddata = data1.find(item=>item.Airline == id);
    function handlefetch(){
        setfetch(true);        
    }
    function handlechange(e){
        setdata({...getdata,[e.target.name] : e.target.value})
    }
    function handleid(e){
        setid(e.target.value)
    }

    function handleclick() {
        setstate(!state)
        setstate1(false)
    }
    function handleclick1(){
        setstate1(!state1)
        setstate(false)
    }

    const postdata = async()=>{

        try {
        const data = await axios.post("https://redux-flight-server.onrender.com/flight",getdata) 
        console.log(data)
        }
        catch(e){
            console.log(e)
        }
    }
 function handleadd(){
    
    if( getdata.From!="" && getdata.To!="" && getdata.Time!="" && getdata.Departure!="" && getdata.Landing!="" && getdata.Price!="" && getdata.Airline!="" && getdata.Image!="" && getdata.Vacancy!="" ){
        postdata();
    alert('posted successfully')
}
else{
    alert("Fill the details")
}
 }
        const deletedata = async()=>{
            try{
                 await axios.delete(`https://redux-flight-server.onrender.com/flight/${[iddata1.id]}`);
                console.log('deleted')
            }
            catch(e){
                console.log(e)
            }
        }
        function handledeleted(){
            const confirm = window.confirm("Confirm to delete")
            if(confirm){
                deletedata();
                alert("Data Deleted Successfully")
            }
            else{
                console.log('Data Not Deleted')
            }
        }

    return (
        <div>
            <Nav/>
            <div className='Admin-airmain'>
                <h1>Airline Names</h1>
            <div className='Admin-air'>
                {
                    flight?.map((item,index)=>(
                        <h3 key={index}>{item.Airline}</h3>
                    ))
                }
            </div>
            </div>
            <div className='Admin'>
                <div className='Admin-btn'>
                <button onClick={handleclick}>ADD Flight Details</button>
                <button onClick={handleclick1}>Delete Flight Details</button>
                </div>
                {
                    state && <div className='Add'>
                        <div className='Admin-input'>
                        <input type="text" onChange={handlechange} value={getdata.From} placeholder='From' name="From" />
                        <input type="text" onChange={handlechange} value={getdata.To} placeholder='TO' name='To' />
                        <input type="text" onChange={handlechange} value={getdata.Departure} placeholder='Departure' name='Departure'/>
                        <input type="text" onChange={handlechange} value={getdata.Landing} placeholder='Landing' name='Landing'/>
                        <input type="text" onChange={handlechange} value={getdata.Time} placeholder='TIme' name='Time' />
                        <input type="text" onChange={handlechange}  value={getdata.Price} placeholder='Price' name='Price'/>
                        <input type="text" onChange={handlechange}  value={getdata.Airline} placeholder='Airline' name='Airline'/>
                        <input type="text" onChange={handlechange} value={getdata.Image} placeholder='ImageUrl' name='Image'/>
                        <input type="text" onChange={handlechange} value={getdata.Vacany} placeholder='Vacancy' name='Vacany'/>
                        </div>
                        <button onClick={handleadd}>Add Flight Details</button>
                    </div>
                }
                {
                    state1 && <div className='delete'>
                        <input type='text' className='Admin-input1' placeholder='Enter Airline Name' value={id} onChange={handleid}/>
                        <button className='Admin-btn1' onClick={handlefetch}>Fetch Details</button>
                        
                        
                        { fetch &&
                             (iddata1 ? <div>
                                {
                                   
                                    [iddata1].map((item,index)=>(
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
                                                <button  style={{backgroundColor:'red'}} onClick={handledeleted}>Delete</button>
                                            </div>
                                         </div>
                                        </div>
                                    ))
                                }
                            </div> : <h1>Airline Name not found</h1>
                                
                            )                 
                            
                        }
                    
                        
                    </div>
                }
            </div>
            <Footer/>
        </div>
    )
}

export default Admin
