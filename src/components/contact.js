import React from 'react';
import '../styles/contact.css'
import { ContactForm } from './ContactForm';
import {useContext} from "react";
import { AppContext } from '../App';

const Contact = () =>{

  const { userName} = useContext(AppContext);

  return (
    <div>
      {/* <h3 className='heading'>This is the Contact page</h3> */}
      <h4 className='contact-heading'> If you wish to send me an email, please fill out this form and I will get back to you {userName}! &#x1F525; </h4>
      <ContactForm> </ContactForm>
      
    </div>
  );
}
export default Contact;