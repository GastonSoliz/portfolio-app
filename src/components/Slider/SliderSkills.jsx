import style from "./scrollerSkills.module.css";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import tailwind from "../../assets/tailwind.png";
import js from "../../assets/js.png";
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
import { Link } from "react-router-dom";

export default function Slider() {
  const { lang } = useLanguage();

  const images = [
    { tech: html, name: "HTML" },
    { tech: css, name: "CSS" },
    { tech: tailwind, name: "TailwindCSS" },
    { tech: js, name: "Javascript" },
    { tech: react, name: "ReactJS" },
    { tech: next, name: "NextJS" },
    { tech: redux, name: "Redux" },
    { tech: node, name: "NodeJS" },
    { tech: express, name: "Express" },
    { tech: sequelize, name: "Sequelize" },
    { tech: postgresql, name: "PostgreSQL" },
    { tech: sql, name: "SQL" },
  ];
  const slides = [...images, ...images, ...images];

  const images2 = [
    { tech: slack, name: "Slack" },
    { tech: git, name: "GIT" },
    { tech: bash, name: "Bash" },
    { tech: trello, name: "Trello" },
    { tech: vsc, name: "VSC" },
    { tech: postgresql, name: "PgAdmin" },
    { tech: mysql, name: "MySQL" },
    { tech: postman, name: "Postman" },
    { tech: tc, name: "Thunder Client" },
  ];

  const slides2 = [...images2, ...images2, ...images2, ...images2];

  return (
    <div className={style.sliderContainer}>
      <h1>{lang === "es" ? "HABILIDADES Y HERRAMIENTAS" : "SKILLS & TOOLS"}</h1>
      <div className={style.divContainer}>
        {/* <div className={style.textContainer}>
          <p>
            {lang === "es"
              ? "Buenas bases en: HTML semantico,CSS, TailwindCSS, Javascript, React, React Router, Renderizado Condicional, Axios, React-Redux, Styled Components."
              : "Good foundation on: semantic HTML ,CSS, TailwindCSS, Javascript, React, React Router, Conditional Rendering, Axios, React-Redux, Styled Components."}
          </p>
          <br />
          <p>
            {lang === "es"
              ? "Fuertes conocimientos en: Node.js / Express, Sequelize."
              : "Strong knowledge on: Node.js / Express, Sequelize. "}
          </p>
          <br />
          <p>
            {lang === "es"
              ? "Como tambien lo basico de: PostgreSQL, SQL."
              : "Also basics on: PostgreSQL, SQL"}
          </p>
        </div> */}
        <div className={style.slider}>
          <div className={style.slider_track}>
            {slides.map((slide, index) => (
              <div className={style.slideContainer} key={index}>
                <img className={style.slide} src={slide.tech} />
                <span className={style.slideName}>{slide.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={style.divContainer}>
        <div className={style.slider}>
          <div className={style.slider_track2}>
            {slides2.map((slide, index) => (
              <div className={style.slideContainer} key={index}>
                <img className={style.slide} src={slide.tech} />
                <span className={style.slideName}>{slide.name}</span>
              </div>
            ))}
          </div>
        </div>
        {/* <div className={style.textContainer2}>
          <p>
            {lang === "es"
              ? "Comunicacion y organizacion con: Slack y Trello"
              : "Communicaton and organization with : Slack & Trello"}
            <br />
            {lang === "es"
              ? "Control de versiones con: Git / Bash"
              : "Version Control: Git / Bash"}
            <br />
            IDE: Visual Studio Code
            <br />
            API: Postman y Thunder Client
            <br />
            {lang === "es"
              ? "Base de datos: PgAdmin y MySQL"
              : "Database: PgAdmin & MySQL"}
          </p>
        </div> */}
      </div>
      <Link to="/about">
        <button className={style.buttonLink}>
          {lang === "es" ? "Mas informacion sobre mi!" : "More info about me!"}
        </button>
      </Link>
    </div>
  );
}
