import style from "./contact.module.css";
import email from "../../assets/email.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { useRef } from "react";

export default function Contact() {
  const refForm = useRef();

  function sendEmail(event) {
    event.preventDefault();
    emailjs.sendForm(
      "service_9o5pmio",
      "template_11u7hla",
      event.target,
      "nhJeYfQ2JmdxwHwn0"
    );
  }

  return (
    <div className={style.contactContainer}>
      <div className={style.redContainer}>
        <h1>Contactame!</h1>
        <p>
          <img src={email} />
          Email: gaston.e.soliz@gmail.com
        </p>
        <Link to="https://www.linkedin.com/in/gaston-soliz/">
          <p>
            <img src={linkedin} />
            Linkedin: Gaston Soliz
          </p>
        </Link>
        <Link to="https://github.com/GastonSoliz">
          <p>
            <img src={github} />
            GitHub: GastonSoliz
          </p>
        </Link>
      </div>
      {/* MAPS DE QUILMES */}
      <form ref={refForm} onSubmit={sendEmail} className={style.formContainer}>
        <label>Email: </label>
        <input type="email" name="email" placeholder="Ingresa tu email..." />
        <label>Asunto: </label>
        <input type="text" name="subject" placeholder="Ingresa tu asunto" />

        <label>Mensaje: </label>
        <textarea
          type="text"
          name="message"
          placeholder="Agrega tu mensaje..."
        ></textarea>
        <button type="submit">Enviar mensaje</button>
      </form>
    </div>
  );
}
