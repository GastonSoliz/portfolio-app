export default function Contact() {
  return (
    <>
      <h1>Contact me!</h1>
      <p>Email: gaston.e.soliz@gmail.com</p>
      <p>Linkedin: Gaston Soliz</p>
      <p>GitHub: GastonSoliz</p>
      {/* MAPS DE QUILMES */}
      <form name="contact" method="POST" data-netlify="true" action="/contact">
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
        <button>Send Message</button>
      </form>
    </>
  );
}
