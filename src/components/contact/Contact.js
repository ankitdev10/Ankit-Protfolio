import React, { useRef, useState } from 'react'
import "./contact.css"
import Phone from "../../images/contact images/phone.png"
import Message from "../../images/contact images/message.png"
import Address from "../../images/contact images/address.png"
import Instagram from "../../images/contact images/instagram.png"
import emailjs from '@emailjs/browser';



const Contact = () => {
 const formRef = useRef()
 const [done, setDone] = useState(false)


 const handleSubmit = (e) => {
  e.preventDefault()

  emailjs.sendForm('service_5wafyws', 'template_btxdlg7', formRef.current, '4Sg_rYvkT4R8W11vj')
      .then((result) => {
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
 }

  return (
    <section  id="contact">
    <div className='contact'>
      <div className="contact-bg"></div>
        <div className="contact-wrapper">
          <div className="contact-left">
            <h1 className="contact-title">Let's talk</h1>
            <div className="contact-info">
              <div className="contact-info-item">
                <img src={Phone} alt="phone-icon" className='c-icon' /> +977 9840480328
              </div>
              <div className="contact-info-item">
                <img src={Message} alt="message-icon" className='c-icon' /> leoankit35@gmail.com
              </div>
              <div className="contact-info-item">
                <a href="https://www.instagram.com/_ankitttttttt/" target="_blank" rel="noreferrer"><img src={Instagram} alt="insta-icon" className='c-icon' /></a>_ankitttttttt
              </div>
              <div className="contact-info-item">
                <img src={Address} alt="address-icon" className='c-icon' />Kathmandu,Nepal
              </div>
            </div>
          </div>
          <div className="contact-right">
            <p className="contact-desc">
              Got a project? Got a business idea? Casual talks? Just hit me up.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input  type="text" placeholder='Name' name="user-name" /> <br />
              <input  type="text" placeholder='Subject' name="user-subject" /><br />
              <input  type="email" placeholder='Email' name="user-email" /><br />
              <textarea rows="6"  placeholder='Message' name="message"></textarea> <br />
              <button>Say Hello</button>
              <p className='email-received'>{done && "Got your mail. I will get back to you as soon as possible."}</p>
            </form>
          </div>
        </div>
      
    </div>
    </section>

  )
}

export default Contact
