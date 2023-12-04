import style from "./home.module.css";
import ContactButton from "../../components/ContactButton/ContactButton";
import CV from "../../assets/Curriculum Vitae SOLIZ.pdf";
import me from "../../assets/ProfileW.png";

export default function Home() {
  return (
    <div className={style.homeContainer}>
      <h1>Hola! Soy Gaston Soliz</h1>
      <h2>Desarrollador Full Stack </h2>
      <h3>
        HTML | CSS | Javascript | React.JS | Redux.js | Node.js | Express.js |
        PostgreSQL | Sequelize
      </h3>
      <div className={style.buttons}>
        <a href={CV} download>
          <button>Descargar CV!</button>
        </a>
        <ContactButton />
      </div>
      <div className={style.photo}>
        <img src={me} alt="me" />
      </div>
    </div>
  );
}
