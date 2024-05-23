import ContactButton from "../../components/ContactButton/ContactButton";
import style from "./about.module.css";
import experience from "../../assets/experience.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import bootstrap from "../../assets/bootstrap.png"
import tailwind from "../../assets/tailwind.png";
import javascript from "../../assets/js.png";
import react from "../../assets/react.png";
import next from "../../assets/next.png";
import redux from "../../assets/redux.png";
import typescript from "../../assets/typescript.png"
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

  const skills= [
    {img:html,name:"HTML",textES:"Intermedio",textEN:"Intermediate"},
    {img:css,name:"CSS",textES:"Intermedio",textEN:"Intermediate"},
    {img:tailwind,name:"TailwindCSS",textES:"Basico",textEN:"Basic"},
    {img:bootstrap,name:"Boostrap",textES:"Basico",textEN:"Basic"},
    {img:javascript,name:"Javascript",textES:"Intermedio",textEN:"Intermediate"},
    {img:react,name:"React",textES:"Intermedio",textEN:"Intermediate"},
    {img:redux,name:"Redux",textES:"Intermedio",textEN:"Intermediate"},
    {img:next,name:"Next",textES:"Intermedio",textEN:"Intermediate"},
    {img:typescript,name:"Typescript",textES:"Basico",textEN:"Basic"},
    {img:node,name:"Node",textES:"Intermedio",textEN:"Intermediate"},
    {img:express,name:"Express",textES:"Intermedio",textEN:"Intermediate"},
    {img:sequelize,name:"Sequelize",textES:"Basico",textEN:"Basic"},
    {img:postgresql,name:"PostgreSQL",textES:"Basico",textEN:"Basic"},
    {img:sql,name:"SQL",textES:"Basic",textEN:"Basic"},
  ]

  const tools=[
    {img:slack,name:"Slack",textES:"Basico",textEN:"Basic"},
    {img:git,name:"Git",textES:"Intermedio",textEN:"Intermediate"},
    {img:bash,name:"Bash",textES:"Intermedio",textEN:"Intermediate"},
    {img:trello,name:"Trello",textES:"Basico",textEN:"Basic"},
    {img:vsc,name:"Visual Studio Code",textES:"Intermedio",textEN:"Intermediate"},
    {img:mysql,name:"MySQL",textES:"Basico",textEN:"Basic"},
    {img:postman,name:"Postman",textES:"Basico",textEN:"Basic"},
    {img:tc,name:"Thunder Client",textES:"Basico",textEN:"Basic"},
  ]

  return (
    <div className={style.aboutContainer}>
      <div className={style.leftContainer}>
        <h1>{lang === "es" ? "Sobre mi!" : "About me!"}</h1>
        <div className={style.skills}>
          <div className={style.side}>
            <h2>{lang === "es" ? "Tecnologias de Desarrollo" : "Development Technologies"}</h2>
            <div className={style.sideSkills}>
              {skills.map((skill,index)=>
                <article key={index}>
                  <img src={skill.img}/>
                  <div>
                    <p>{skill.name}</p>
                    <small>{lang === "es" ? skill.textES : skill.textEN}</small>
                  </div>
                </article>
              )}
            </div>
          </div>
          <div className={style.side}>
            <h2>{lang === "es" ? "Herramientas" : "Tools"}</h2>
            <div className={style.sideSkills}>
            {tools.map((tool,index)=>
                <article>
                  <img src={tool.img}/>
                  <div>
                    <p>{tool.name}</p>
                    <small>{lang === "es" ? tool.textES : tool.textEN}</small>
                  </div>
                </article>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={style.textContainer}>
        <div className={style.card}>
          <img src={experience} />
          <h2>{lang === "es" ? "Experiencia: 3 proyectos finalizados e igual bajo optimizacion!" : "Experience: 3 projects completed and still under optimization!"}</h2>
        </div>
        <h3>{lang === "es" ? "Siendo alguien nuevo, tengo un gran interes y ambicion para poder ser idoneo para los demas. Actualmente dedicandome a la programacion de aplicaciones web, me termina gustando mas el Front-End pero me defiendo tambien en Back-End. En base a los proyectos que fui desarrollando en este tiempo, tanto individuales como grupales, fui desarrollando cierta responsabilidad para cumplir las expectativas que tienen sobre mi y el esfuerzo que conlleva . Asi mismo, esto complementa mi lado autodidacta de aprender lo necesario para poder contribuir con mis conocimientos y tecnicas. Aparte de esto, tambien estoy buscando mi primer empleo y verificar estar a la altura de ello, mostrando todas mis habilidades como desarrollador y finalmente empezar mi camino IT!" : "Being someone new, i have a big interest and ambition to be able to be worth to others. Actually dedicating myself to programming web applications, i end up liking the Front-End more but i also defend myself on the Back-End. Based on the projects i had been developing on this time, both individual and groupal, i developed some responsability to fulfill the expectations they had of me and the effort it takes. As well, this complements my self-taught side to learn what is necessary to be able to contribute with my knowledge and techniques. Besides that, i'm also looking for my first job and make sure i'm up to it, showing all my skills as a developer and finally start my IT path!"}</h3>
        <ContactButton />
      </div>
    </div>
  );
}
