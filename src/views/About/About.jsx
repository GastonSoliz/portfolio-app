import ContactButton from "../../components/ContactButton/ContactButton";
import style from "./about.module.css";
import experience from "../../assets/experience.png";

export default function About() {
  return (
    <div className={style.aboutContainer}>
      <div className={style.leftContainer}>
        <h1>Sobre mi!</h1>
        {/* IMAGEN MIA */}
      </div>
      <div className={style.textContainer}>
        <div className={style.card}>
          <img src={experience} />
          <h2>
            Experiencia: 3 proyectos finalizados e igual bajo optimizacion!
          </h2>
        </div>
        {/* <div>
          <img />
          <p>Proyectos: 3 proyectos finalizados he igual bajo optimizacion!</p>
        </div> */}

        <h3>
          Siendo alguien nuevo, tengo un gran interes como asi una pequeña
          ambicion para poder ser idoneo para los demas. Actualmente dedicandome
          a la programacion de aplicaciones web, me termina gustando mas el
          Front-End pero me defiendo tambien en Back-End. En base a los
          proyectos que fui desarrollando en este tiempo tanto individuales como
          grupales fui desarrollando cierta responsabilidad para cumplir y un
          esfuerzo para lograr las expectativas que tienen sobre mi. Asi mismo,
          esto complementa mi lado autodidacta de aprender lo necesario para
          poder contribuir con mis conocimientos y tecnicas mientras continuo
          aprendiendo. Aparte de esto, tambien estoy buscando mi primer empleo y
          verificar estar a la altura de ello, mostrando todas mis habilidades
          como desarrollador y finalmente empezar mi camino IT!
        </h3>
        <ContactButton />
      </div>
    </div>
  );
}
