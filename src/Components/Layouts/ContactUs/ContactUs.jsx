import React, { useRef } from 'react'
import './ContactUs.css';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {

  const form = useRef();

  const handdleSendEmail = (event) => {
    const serviceId = 'service_i19tpz6'
    const emailTemplate = 'template_k68vevf'
    const APIKEY = '9ByN8GiJOI-NutkJf'

    event.preventDefault();
    emailjs.sendForm(serviceId,emailTemplate,form.current,APIKEY)
    .then((result) => {
        console.log(result.text); // OK
    }, (error) => {
        console.log(error.text);
    })
  }     

  return (
    <form ref={form} action="" onSubmit={handdleSendEmail}>
        <div className='header-contact'>
            <h2>Contact Us</h2>
            <p>Please fill this form</p>
        </div>
        <fieldset className='field-name'>
            <label className='symbol-required name' htmlFor="">Name</label>
            <input placeholder='Jackson Londoño' type="text" id='name' required />
        </fieldset>
        <fieldset className='field-email'>
            <label className='symbol required' htmlFor="">email</label>
            <input placeholder='ej: email@dom.co' type="text" id='email' required />
        </fieldset>
        <fieldset className='field-message'>
            <label className='symbol-required' htmlFor="">Message</label>
            <textarea name="message" maxLength="500" placeholder='Insert your message' required id="" cols="30" rows="10"></textarea>
        </fieldset>
        <button className='btn-send'>Send</button>
    </form>
  )
}
