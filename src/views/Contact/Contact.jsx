import style from "./contact.module.css";
import email from "../../assets/email.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  function notifySuccess() {
    toast.success("El correo se ha enviado con exito!", {
      position: "top-center",
      autoClose: 5000,
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
          setTimeout(() => {
            window.location.reload(false);
          }, 3000);
        },
        () => {
          notifyError();
        }
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
      <form onSubmit={sendEmail} className={style.formContainer}>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          placeholder="Ingresa tu email..."
          required
        />
        <label>Asunto: </label>
        <input
          type="text"
          name="subject"
          placeholder="Ingresa tu asunto"
          required
        />
        <label>Mensaje: </label>
        <textarea
          type="text"
          name="message"
          placeholder="Agrega tu mensaje..."
          required
        ></textarea>
        <button type="submit">Enviar mensaje</button>
        <button onClick={notifySuccess}>Notify!</button>
      </form>
      <ToastContainer />
    </div>
  );
}
