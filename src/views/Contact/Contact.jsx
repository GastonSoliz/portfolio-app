import { useState } from "react";
import style from "./contact.module.css";
import email from "../../assets/email.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    //subject: '',
    message: "",
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", formData }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
  };

  return (
    <div className={style.contactContainer}>
      <div className={style.redContainer}>
        <h1>Contact me!</h1>
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
      <form
        name="contact"
        method="POST"
        action="/contact"
        className={style.formContainer}
      >
        <input type="hidden" name="form-name" value="contact" />
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
