import style from "./home.module.css";
import ContactButton from "../../components/ContactButton/ContactButton";

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
        <button>Descargar CV!</button>
        <ContactButton />
      </div>
    </div>
  );
}
