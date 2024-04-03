import ContactButton from "../../components/ContactButton/ContactButton";
import style from "./about.module.css";
import experience from "../../assets/experience.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import tailwind from "../../assets/tailwind.png";
import javascript from "../../assets/js.png";
import react from "../../assets/react.png";
import next from "../../assets/next.png";
import redux from "../../assets/redux.png";
import node from "../../assets/node.png";
import express from "../../assets/express.png";
import sequelize from "../../assets/sequelize.png";
import postgresql from "../../assets/pgadmin.png";
import sql from "../../assets/sql.png";
import { useLanguage } from "../../LanguageContext";
import slack from "../../assets/slack.png";
import git from "../../assets/git.png";
import bash from "../../assets/bash.png";
import trello from "../../assets/trello.png";
import vsc from "../../assets/vsc.png";
import mysql from "../../assets/mysql.png";
import postman from "../../assets/postman.png";
import tc from "../../assets/tc.png";

export default function About() {
  const { lang } = useLanguage();
  const text = {
    titleES: "Sobre mi!",
    titleEN: "About me!",
    sideDES: "Desarrollo Front-end / Back end",
    sideDEN: "Front-end / Back end Development",
    sideTES: "Herramientas",
    sideTEN: "Tools",
    bES: "Basico",
    bEN: "Basic",
    iES: "Intermedio",
    iEN: "Intermediate",
    experienceES:
      "Experiencia: 3 proyectos finalizados e igual bajo optimizacion!",
    experienceEN:
      "Experience: 3 projects completed and still under optimization!",
    aboutES:
      "Siendo alguien nuevo, tengo un gran interes y ambicion para poder ser idoneo para los demas. Actualmente dedicandome a la programacion de aplicaciones web, me termina gustando mas el Front-End pero me defiendo tambien en Back-End. En base a los proyectos que fui desarrollando en este tiempo, tanto individuales como grupales, fui desarrollando cierta responsabilidad para cumplir las expectativas que tienen sobre mi y el esfuerzo que conlleva . Asi mismo, esto complementa mi lado autodidacta de aprender lo necesario para poder contribuir con mis conocimientos y tecnicas. Aparte de esto, tambien estoy buscando mi primer empleo y verificar estar a la altura de ello, mostrando todas mis habilidades como desarrollador y finalmente empezar mi camino IT!",
    aboutEN:
      "Being someone new, i have a big interest and ambition to be able to be worth to others. Actually dedicating myself to programming web applications, i end up liking the Front-End more but i also defend myself on the Back-End. Based on the projects i had been developing on this time, both individual and groupal, i developed some responsability to fulfill the expectations they had of me and the effort it takes. As well, this complements my self-taught side to learn what is necessary to be able to contribute with my knowledge and techniques. Besides that, i'm also looking for my first job and make sure i'm up to it, showing all my skills as a developer and finally start my IT path!",
  };
  return (
    <div className={style.aboutContainer}>
      <div className={style.leftContainer}>
        <h1>{lang === "es" ? text.titleES : text.titleEN}</h1>
        <div className={style.skills}>
          <div className={style.side}>
            <h2>{lang === "es" ? text.sideDES : text.sideDEN}</h2>
            <div className={style.sideSkills}>
              <article>
                <img src={html} />
                <div>
                  <h4>HTML</h4>
                  <small>{lang === "es" ? text.iES : text.iEN}</small>
                </div>
              </article>
              <article>
                <img src={css} />
                <div>
                  <h4>CSS</h4>
                  <small>{lang === "es" ? text.bES : text.bEN}</small>
                </div>
              </article>
              <article>
                <img src={tailwind} />
                <div>
                  <h4>TailwindCSS</h4>
                  <small>{lang === "es" ? text.bES : text.bEN}</small>
                </div>
              </article>
              <article>
                <img src={javascript} />
                <div>
                  <h4>Javascript</h4>
                  <small>{lang === "es" ? text.iES : text.iEN}</small>
                </div>
              </article>
              <article>
                <img src={react} />
                <div>
                  <h4>React.js</h4>
                  <small>{lang === "es" ? text.iES : text.iEN}</small>
                </div>
              </article>
              <article>
                <img src={redux} />
                <div>
                  <h4>Redux</h4>
                  <small>{lang === "es" ? text.iES : text.iEN}</small>
                </div>
              </article>
              <article>
                <img src={next} />
                <div>
                  <h4>Next.js</h4>
                  <small>{lang === "es" ? text.bES : text.bEN}</small>
                </div>
              </article>
              <article>
                <img src={node} />
                <div>
                  <h4>Node.js</h4>
                  <small>{lang === "es" ? text.iES : text.iEN}</small>
                </div>
              </article>
              <article>
                <img src={express} />
                <div>
                  <h4>Express</h4>
                  <small>{lang === "es" ? text.iES : text.iEN}</small>
                </div>
              </article>
              <article>
                <img src={sequelize} />
                <div>
                  <h4>Sequelize</h4>
                  <small>{lang === "es" ? text.bES : text.bEN}</small>
                </div>
              </article>
              <article>
                <img src={postgresql} />
                <div>
                  <h4>PostgreSQL</h4>
                  <small>{lang === "es" ? text.bES : text.bEN}</small>
                </div>
              </article>
              <article>
                <img src={sql} />
                <div>
                  <h4>SQL</h4>
                  <small>{lang === "es" ? text.bES : text.bEN}</small>
                </div>
              </article>
            </div>
          </div>
          <div className={style.side}>
            <h2>{lang === "es" ? text.sideTES : text.sideTEN}</h2>
            <div className={style.sideSkills}>
              <article>
                <img src={slack} />
                <div>
                  <h4>Slack</h4>
                  <small>{lang === "es" ? text.bES : text.bEN}</small>
                </div>
              </article>
              <article>
                <img src={git} />
                <div>
                  <h4>GIT</h4>
                  <small>{lang === "es" ? text.iES : text.iEN}</small>
                </div>
              </article>
              <article>
                <img src={bash} />
                <div>
                  <h4>Bash</h4>
                  <small>{lang === "es" ? text.iES : text.iEN}</small>
                </div>
              </article>
              <article>
                <img src={trello} />
                <div>
                  <h4>Trello</h4>
                  <small>{lang === "es" ? text.bES : text.bEN}</small>
                </div>
              </article>
              <article>
                <img src={vsc} />
                <div>
                  <h4>Visual Studio Code</h4>
                  <small>{lang === "es" ? text.iES : text.iEN}</small>
                </div>
              </article>
              <article>
                <img src={mysql} />
                <div>
                  <h4>MySQL</h4>
                  <small>{lang === "es" ? text.bES : text.bEN}</small>
                </div>
              </article>
              <article>
                <img src={postman} />
                <div>
                  <h4>Postman</h4>
                  <small>{lang === "es" ? text.bES : text.bEN}</small>
                </div>
              </article>
              <article>
                <img src={tc} />
                <div>
                  <h4>Thunder Client</h4>
                  <small>{lang === "es" ? text.bES : text.bEN}</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div className={style.textContainer}>
        <div className={style.card}>
          <img src={experience} />
          <h2>{lang === "es" ? text.experienceES : text.experienceEN}</h2>
        </div>
        <h3>{lang === "es" ? text.aboutES : text.aboutEN}</h3>
        <ContactButton />
      </div>
    </div>
  );
}
