import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css'

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mzm3btm', 'template_nri1l8u', form.current, 'rbtNmNscH69eIer4J')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      alert("your email was sent!!!")

      e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='form-wrapper'>
      <label className='text'>Name:</label>
      <input placeholder="Type your full name here" className='input-area' type="text" name="name" />
      <label className='text'>Email:</label>
      <input placeholder="enter your email" className='input-area' type="email" name="email" />
      <label className='text'>Message:</label>
      <textarea placeholder="Type here your message!" className='text-area' name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};