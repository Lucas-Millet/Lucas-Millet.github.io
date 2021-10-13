// == Import npm
import React, { useState } from 'react';
import { send } from 'emailjs-com';


// == Import

import './ContactPage.scss';
import Linkedin from 'src/assets/picture/link.png';
import Github from 'src/assets/picture/githubLogo.svg';


// == Composant
const ContactPage  = () => { 

  const [toSend, setToSend] = useState({
    from_name: '',
    from_email: '',
    message: '',
    subject: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_krwmb7k',
      'template_pei0gf9',
      toSend,
      'user_thCTDouQAc9jaokBm2jAE'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    setToSend({
      from_name: '',
      from_email: '',
      message: '',
      subject: '',
    }) 
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return(
    <div className="contactPage">
    <h1 className="contactPage__Header">Faites-moi signe</h1>
    <p>Utilisez ce formulaire pour m'envoyer un message. Vous pouvez également me joindre à cette adresse : lucamillet@gmail.com</p>
    <form onSubmit={onSubmit}>
    <input 
        className="contactPage__field"
        type='text'
        name='from_name'
        placeholder='Votre nom'
        value={toSend.from_name}
        onChange={handleChange}
      />
    <input 
        className="contactPage__field"
      type='text'
      name='from_email'
      placeholder='Votre email'
      value={toSend.from_email}
      onChange={handleChange}
    />
    <input 
        className="contactPage__field"
      type='text'
      name='subject'
      placeholder='Sujet'
      value={toSend.subject}
      onChange={handleChange}
    />
    <textarea  
        className="contactPage__field"
        rows="8"
      type='text'
      name='message'
      placeholder='Votre message'
      value={toSend.message}
      onChange={handleChange}
    />
    <button type='submit' className="contactPage__Submit">Envoyer</button> 
    </form>
    <div className="contactPage__RS">
      <a href="https://www.linkedin.com/in/lucas-millet-286238150/" target="_blank" className="contactPage__link"><img src={Linkedin} alt="lien vers linkedin"/></a>
      <a href="https://github.com/Lucas-Millet" target="_blank" className="contactPage__link"><img src={Github} alt="lien vers github"/></a>
    </div>
   

    </div>
 
  )
};

// == Export
export default ContactPage ;
