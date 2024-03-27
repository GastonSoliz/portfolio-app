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
import CVen from "../../assets/CV Eng.pdf";
import CVes from "../../assets/CV.pdf";
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
    html,
    css,
    tailwind,
    js,
    react,
    next,
    redux,
    node,
    express,
    sequelize,
    postgresql,
    sql,
  ];
  const slides = [...images, ...images, ...images];

  const images2 = [
    slack,
    git,
    bash,
    trello,
    vsc,
    postgresql,
    mysql,
    postman,
    tc,
  ];

  const slides2 = [...images2, ...images2, ...images2, ...images2];

  return (
    <div className={style.sliderContainer}>
      <h1>SKILLS & TOOLS</h1>
      <div className={style.divContainer}>
        <div className={style.textContainer}>
          <p>
            Buenas bases en: HTML semantico,CSS, TailwindCSS, Javascript, React,
            React Router, Renderizado condicional, Axios, React-Redux, Styled
            Components.
          </p>
          <br />
          <p>Fuertes conocimientos en: Node.js / Express, Sequelize.</p>
          <br />
          <p>Como tambien lo basico de: PostgreSQL, SQL.</p>
          {/* {lang === "es" ? (
          <a href={CVes} download>
            <button>Descarga mi CV!</button>
          </a>
        ) : (
          <a href={CVen} download>
            <button>Download my resume!</button>
          </a>
        )} */}
        </div>
        <div className={style.slider}>
          <div className={style.slider_track}>
            {slides.map((slide, index) => (
              <img className={style.slide} src={slide} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className={style.divContainer}>
        <div className={style.slider}>
          <div className={style.slider_track2}>
            {slides2.map((slide, index) => (
              <img className={style.slide} src={slide} key={index} />
            ))}
          </div>
        </div>
        <div className={style.textContainer2}>
          <p>
            Comunicaciones y organizaciones con: Slack y Trello
            <br />
            Control de versiones con: Git / Bash
            <br />
            IDE: Visual Studio Code
            <br />
            API: Postman y Thunder Client
            <br />
            Base de datos: PgAdmin y MySQL
          </p>
        </div>
      </div>
      <Link to="/about">
        <button className={style.buttonLink}>Mas informacion sobre mi!</button>
      </Link>
    </div>
  );
}
