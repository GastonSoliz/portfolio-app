import { useState } from "react";

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
    <>
      <h1>Contact me!</h1>
      <p>Email: gaston.e.soliz@gmail.com</p>
      <p>Linkedin: Gaston Soliz</p>
      <p>GitHub: GastonSoliz</p>
      {/* MAPS DE QUILMES */}
      <form name="contact" method="POST" action="/contact">
        <input type="hidden" name="form-name" value="contact" />
        <label>Name: </label>
        <input type="text" name="fullname" placeholder="Insert Your Name..." />
        <label>Email: </label>
        <input type="email" name="email" placeholder="Insert Your Email..." />
        {/* <label>Subject: </label>
        <input type="text" name="subject" /> */}

        <label>Message: </label>
        <textarea
          type="text"
          name="message"
          placeholder="Insert Your Message..."
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </>
  );
}
