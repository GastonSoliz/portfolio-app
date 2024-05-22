import style from "./contact.module.css";
import email from "../../assets/email.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLanguage } from "../../LanguageContext";

export default function Contact() {
  const { lang } = useLanguage();

  function notifySuccess() {
    toast.success("El correo se ha enviado con exito!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  function notifyError() {
    toast.error(
      "El mensaje no se pudo enviar correctamente, por favor intentalo despues",
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  }

  function sendEmail(event) {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_9o5pmio",
        "template_11u7hla",
        event.target,
        "nhJeYfQ2JmdxwHwn0"
      )
      .then(
        () => {
          notifySuccess();
          event.target.reset();
        },
        () => {
          notifyError();
        }
      );
  }

  return (
    <div className={style.contactContainer}>
      <div className={style.redContainer}>
        <h1>{lang === "es" ? "Contactame!" : "Contact me!"}</h1>
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
      <div className={style.formDivContainer}>
        <h2>
          {lang === "es"
            ? "Mandame un mensaje a mi email!"
            : "Send me a message to my mail!"}
        </h2>
        <form onSubmit={sendEmail} className={style.formContainer}>
          <div>
            <label>{lang === "es" ? "Correo: " : "Mail: "}</label>
            <input 
            type="email" 
            name="email" 
            placeholder={lang==="es"? "ejemplo@mail.com":"example@mail.com"} 
            required />
          </div>
          <div>
            <label>{lang === "es" ? "Asunto: " : "Subject: "}</label>
            <input 
            type="text" 
            name="subject" 
            placeholder={lang==="es"? "Oportunidad de empleo":"Job Opportunity"} 
            required />
          </div>
          <div>
            <label>{lang === "es" ? "Mensaje: " : "Message: "}</label>
            <textarea
            type="text"
            name="message"
            placeholder={lang==="es"?"Buen dia, me presento...":"Good morning, i introduced myself..."}
            required
            ></textarea>
          </div>
          <button type="submit">
            {lang === "es" ? "Enviar mensaje" : "Send message"}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
