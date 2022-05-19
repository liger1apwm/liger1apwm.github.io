import React from 'react';
import '../styles/pages.css'
import Subject from './Subject';
import TextRotation from './TextRotation';
import {useContext} from "react";
import { AppContext } from '../App';



const Home = () =>{
  
  const { userName,setUserName} = useContext(AppContext);

  const HandleChange = (event) => {
        setUserName(event.target.value);
  }

  return (
    <div>
      <h3 className='home-heading'> Hey {userName},Welcome to Eric Aragundi Website</h3>
      <div className="text-rotation-div">
        <TextRotation > </TextRotation>
      </div>
      
      {/* <h4 >What's your name?</h4> */}
      <label style={{color:'white'}}> What's your name? &#x1F449;</label>
      <input type='text' onChange={HandleChange} style={{width: "80px",height:"25px"}}></input> 

      <Subject> </Subject>
           
      
    </div>
  );
}
export default Home;
