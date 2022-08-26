import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css"
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qd3mfuk', 'template_ybkfaa8', form.current, 'x67AomAG7qU6OziKb')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Ponerse en contacto</h5>
      <h2>Contáctame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Correo electrónico</h4>
            <h5>mjpereson@gmail.com</h5>
            <a href="mailto:mjpereson@gmail.com" target='_blank'>Enviar un correo</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+54 9 3794340532</h5>
            <a href="https://wa.me/+5493794340532" target='_blank'>Enviar un mensaje</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Su nombre completo' required />
          <input type="text" name='email' placeholder='Su correo electrónico' required />
          <textarea name="message" rows="7" placeholder='Su mensaje'></textarea>
          <button type='submit' className='btn btn-primary'>Enviar mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact