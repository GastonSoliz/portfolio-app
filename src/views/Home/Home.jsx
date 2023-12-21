import style from "./home.module.css";
import ContactButton from "../../components/ContactButton/ContactButton";
import CVes from "../../assets/Curriculum Vitae SOLIZ.pdf";
import CVen from "../../assets/Resume SOLIZ Eng.pdf";
import me from "../../assets/ProfileW.png";
import { useLanguage } from "../../LanguageContext";

export default function Home() {
  const { lang } = useLanguage();

  return (
    <div className={style.homeContainer}>
      <div className={style.photo}>
        <img src={me} alt="me" />
      </div>
      <h2>
        {lang === "es" ? "Hola! Soy Gaston Soliz" : "Hi! I'm Gaston Soliz"}
      </h2>
      <h2>
        {lang === "es" ? "Desarrollador Full Stack" : "Full Stack Developer"}
      </h2>
      <h1>
        HTML | CSS | Javascript | React.JS | Redux.js | Node.js | Express.js |
        PostgreSQL | Sequelize
      </h1>
      <div className={style.buttons}>
        {lang === "es" ? (
          <a href={CVes} download>
            <button>Descarga mi CV!</button>
          </a>
        ) : (
          <a href={CVen} download>
            <button>Download my resume!</button>
          </a>
        )}
        <ContactButton />
      </div>
    </div>
  );
}
