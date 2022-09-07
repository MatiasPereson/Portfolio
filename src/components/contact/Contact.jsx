import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css"
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import swal from 'sweetalert'

const Contact = () => {
  const [errors, setErrors] = useState({})
  const [text, enableButton] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleTextChange = (e) => {
    e.preventDefault()
    enableButton({
      ...text,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...text,
      [e.target.name]: e.target.value
    }))
  };

  const validate = (value) => {
    let error = {}
    if (!value.email) error.email = 'Email requerido.'
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.email)) error.email = 'El email introducido es invalido.'
    if (!value.name) error.name = 'Nombre requerido.'
    else if (/ ^ [a-zA-Z] + [a-zA-Z] + $ /.test(value)) error.name = 'Debe ingresar un nombre valido'
    if (!value.message) error.message = 'Debe ingresar un mensaje'
    return error
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qd3mfuk', 'template_ybkfaa8', form.current, 'x67AomAG7qU6OziKb')

    e.target.reset();
  };

  //alert
  const messageSent = () => {
    swal("¡Su mensaje ha sido enviado satisfactoriamente!")
  }

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
          <input type="text" name='name' placeholder='Su nombre completo' value={text.name} onChange={e => handleTextChange(e)} /> {errors.name && (<p>{errors.name}</p>)}
          <input type="text" name='email' placeholder='Su correo electrónico' value={text.email} onChange={e => handleTextChange(e)} /> {errors.email && (<p>{errors.email}</p>)}
          <textarea name="message" rows="7" placeholder='Su mensaje' value={text.message} onChange={e => handleTextChange(e)} ></textarea> {errors.message && (<p>{errors.message}</p>)}
          <button type='submit' className='btn btn-primary' disabled={!text.name || !text.email || !text.message || errors.name || errors.email || errors.message} onClick={messageSent}>Enviar mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact