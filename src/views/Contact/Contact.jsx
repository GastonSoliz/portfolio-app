export default function Contact() {
  return (
    <>
      <h1>Contact me!</h1>
      <p>Email: gaston.e.soliz@gmail.com</p>
      <p>Linkedin: Gaston Soliz</p>
      <p>GitHub: GastonSoliz</p>
      {/* MAPS DE QUILMES */}
      <form name="contact" netlify>
        <label>Name: </label>
        <input type="" name="fullname" />
        <label>Email: </label>
        <input type="email" name="email" />
        <label>Subject: </label>
        <input type="text" name="subject" />
        <label>Message: </label>
        <input type="text" name="message" />
        <button>Send Message</button>
      </form>
    </>
  );
}
