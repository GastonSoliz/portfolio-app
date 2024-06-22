import style from "./home.module.css";
import ContactButton from "../../components/ContactButton/ContactButton";
import CVen from "../../assets/CV Eng.pdf";
import CVes from "../../assets/CV.pdf";
import me from "../../assets/ProfileW.png";
import { useLanguage } from "../../LanguageContext";
import SliderSkills from "../../components/Slider/SliderSkills";
import Portfolio from "../../components/Portfolio/Portfolio";
import Contact from "../../components/Contact/Contact";

export default function Home() {
  const { lang } = useLanguage();

  return (
    <>
      <div className={style.homeContainer} id="home">
        <div className={style.photoContainer}>
          <div className={style.photo}>
            <img src={me} alt="me" />
          </div>
        </div>
        {/* <h2>
          {lang === "es"
            ? "Hola! mi nombre es Gaston Soliz"
            : "Hi! I'm Gaston Soliz"}
        </h2>
        <h2>
          {lang === "es" ? "Desarrollador Full Stack" : "Full Stack Developer"}
        </h2> */}
        <div className={style.textContainer}>
          <span>
            {lang === "es" ? "Hola! Mi nombre es " : "Hi! My name is "}
          </span>
          <h1>Gaston Soliz</h1>
          <h2>
            {lang === "es"
              ? "Desarrollador Full Stack"
              : "Full Stack Developer"}
          </h2>
          <h4>
            HTML | CSS | Javascript | React.JS | Redux.js | Node.js | Express.js
            | PostgreSQL | Sequelize
          </h4>
          <p>
            {lang === "es"
              ? "Experiencia con React (CRA / Vite.js / Next.js) en el frontend, y Node.js / Express en el backend. En conjunto, me aventuro a crear soluciones web que combinen la funcionalidad y el diseño simple."
              : "Experience with React (CRA / Vite.js / Next.js) on the frontend, and Node.js / Express on the backend. Overall, i focus on create web solutions that combine functonality and simple design"}
          </p>
          <p>
            {lang === "es"
              ? "Mi objetivo es transformar ideas en posibles experiencias digitales mediante soluciones creativas y eficentes, contribuyendo al progreso."
              : "My goal is to transform ideas into possible digital experiences through creative and efficient solutions, contributing to progress"}
          </p>
          <p>
            {lang === "es"
              ? "Comprometido con el aprendizaje continuo y evolucionar en el campo del desarrollo web. Enfocado en el desarrollo de alta calidad, limpio, con un enfoque especial en la formacion y el desarrollo profesional."
              : "Committed to continuous learning and to evolving in the field of web development. Focused on the high-quality and clean development, with a special focus on training and proffesional development"}
          </p>
          <div className={style.buttons}>
            {lang === "es" ? (
              <a href={CVes} download>
                <button>¡Descarga mi CV!</button>
              </a>
            ) : (
              <a href={CVen} download>
                <button>¡Download my resume!</button>
              </a>
            )}
            <ContactButton />
          </div>
        </div>
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="skills">
        <SliderSkills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
