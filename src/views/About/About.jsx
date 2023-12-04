import ContactButton from "../../components/ContactButton/ContactButton";
import style from "./about.module.css";
import experience from "../../assets/experience.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/js.png";
import react from "../../assets/react.png";
import next from "../../assets/next.png";
import redux from "../../assets/redux.png";
import node from "../../assets/node.png";
import express from "../../assets/express.png";
import sequelize from "../../assets/sequelize.png";
import postgresql from "../../assets/pgadmin.png";

export default function About() {
  return (
    <div className={style.aboutContainer}>
      <div className={style.leftContainer}>
        <h1>Sobre mi!</h1>
        <div className={style.skills}>
          <div className={style.side}>
            <h2>Frontend Development</h2>
            <div className={style.sideSkills}>
              <article>
                <img src={html} />
                <div>
                  <h4>HTML</h4>
                  <small>Intermedio</small>
                </div>
              </article>
              <article>
                <img src={css} />
                <div>
                  <h4>CSS</h4>
                  <small>Basico</small>
                </div>
              </article>
              <article>
                <img src={javascript} />
                <div>
                  <h4>Javascript</h4>
                  <small>Intermedio</small>
                </div>
              </article>
              <article>
                <img src={react} />
                <div>
                  <h4>React.js</h4>
                  <small>Intermedio</small>
                </div>
              </article>
              <article>
                <img src={redux} />
                <div>
                  <h4>Redux</h4>
                  <small>Intermedio</small>
                </div>
              </article>
              <article>
                <img src={next} />
                <div>
                  <h4>Next.js</h4>
                  <small>Basico</small>
                </div>
              </article>
            </div>
          </div>
          <div className={style.side}>
            <h2>Backend Development</h2>
            <div className={style.sideSkills}>
              <article>
                <img src={node} />
                <div>
                  <h4>Node.js</h4>
                  <small>Basico</small>
                </div>
              </article>
              <article>
                <img src={express} />
                <div>
                  <h4>Express</h4>
                  <small>Intermedio</small>
                </div>
              </article>
              <article>
                <img src={sequelize} />
                <div>
                  <h4>Sequelize</h4>
                  <small>Basico</small>
                </div>
              </article>
              <article>
                <img src={postgresql} />
                <div>
                  <h4>PostgreSQL</h4>
                  <small>Basico</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div className={style.textContainer}>
        <div className={style.card}>
          <img src={experience} />
          <h2>
            Experiencia: 3 proyectos finalizados e igual bajo optimizacion!
          </h2>
        </div>
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
