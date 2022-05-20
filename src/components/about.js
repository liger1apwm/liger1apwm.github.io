import React from 'react';
import '../styles/about.css'
import myPic from "../images/eric aragundi suit picture.png"
import {useContext} from "react";
import { AppContext } from '../App';

const About = () =>{

  const { userName} = useContext(AppContext);

  return (
    <div className='about'>
      {/* <h3 className='about-heading'>This is the About page</h3> */}
      <img src={myPic}  className="my-pic"/>
      <p className='about-text'> 
        Hey {userName}!!, I am so happy that you are visting my page and interested in know about me.
        I am Eric Aragundi, a mathematics, computer science, data science and music enthusiast that love 
        learning in general!. I was born in ecuador but grew up in dominican republic were I lived for 11 years.
        I came to USA in 2014 and rapidly I started working toward my higher education goals. I hold an associate 
        in mathematics from Bronx community College and a bachelor in mathematics with a minor in computer science 
        from Lehman College. I recieved two schoolarships to currently persue my Master in statistics in Columbia University.
        <br />
        <br />
        I have experience in research through PTS3 and LSAMP program as well as working as a research assintant 
        for Prof. Megan Owen in Lehman college. I have done coding expirience in programs like Public Interest 
        Technology Data Science Corps (PIT-DSC), TTP , etc. My last expirience was as an software engeneer/data
        science intern in the Wall street journal.
        <br />
        <br />
        I love to network and meet new people so anyone wishing to know more in deep about me can connect with
        me in my linkedIn:  <a href="https://www.linkedin.com/in/eric-aragundi-6611a519b/" target="_blank">https://www.linkedin.com/in/eric-aragundi-6611a519b/</a>  
        
      </p>
     

      {/* <div>
        
      </div> */}
    </div>
  );
}
export default About;
