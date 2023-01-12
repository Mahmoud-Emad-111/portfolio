import React from "react";
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { useState } from "react";
const Contact=()=>{
    const form=useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_anscqo9', 'template_5qfsh3q', form.current, '-TrgmU9trzV3ofQD0')
          .then((result) => {
              console.log(result.text);
              Stedoen(true)
          }, (error) => {
              console.log(error.text);
          });
      };

      const [done,Stedoen]=useState(false);
    return(
        <div className="contact">
            <div className="c-left">
                    <span>get in touch</span>
                    <span>contact me</span>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder="Name" className="user" name="to_name" autoComplete="off" />
                    <input type="emali" placeholder="Email" className="user" name="from_name" autoComplete="off"/>
                    <textarea  name="message" className="user" placeholder="Message" autoComplete="off"  />
                    <input type="submit"  value="Sent" className="button"/>
                    <span className="suc-contact">{done==true ? "thanks for contaction me!": ''}</span>
                </form>
            </div>
        </div>
    )
}
export default Contact;