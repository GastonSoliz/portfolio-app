import WorkCard from "../WorkCard/WorkCard";
import style from "./cardList.module.css";
import photo0RM from "../../assets/R&MLogin.png";
import photo1RM from "../../assets/R&MHome.png";
import photo2RM from "../../assets/R&MHome2.png";
import photo3RM from "../../assets/R&MFav.png";
import photo4RM from "../../assets/R&MDetail.png";
import photo0DR from "../../assets/DRHome.png";
import photo1DR from "../../assets/DRDetail.png";
import photo2DR from "../../assets/DRForm.png";
import photo0EP from "../../assets/EPHome.png";
import photo1EP from "../../assets/EPCarrousel.png";
import photo2EP from "../../assets/EPDetail.png";
import photo3EP from "../../assets/EPUser.png";
import photo4EP from "../../assets/EPDashboardA.png";
import photo5EP from "../../assets/EPDashboardSA.png";
import photo6EP from "../../assets/EPReview.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import css from "../../assets/css.png";
import tailwind from "../../assets/tailwind.png";
import next from "../../assets/next.png";
import node from "../../assets/node.png";
import express from "../../assets/express.png";
import postgresql from "../../assets/pgadmin.png";

export default function WorkCardList({ lang }) {
  const projects = [
    {
      name: "Rick & Morty App",
      typeEN: "Academic Individual project",
      typeES: "Proyecto Individual Academico",
      descriptionEN:
        "Application web that extracts data about characters of Rick & Morty series from the API: https://rickandmortyapi.com/ . A registration and login from database, navigation bar, character carousel, favourites section, search filters were implemented. The development environment used were: Create React App",
      descriptionES:
        "Aplicacion web que extrae informacion sobre personajes de la serie Rick & Morty desde la API: https://rickandmortyapi.com/ . Se implemento un registro e inicio de sesion desde una base de datos, Barra de navegacion, Carrousel de personajes, Seccion de favoritos, Filtros de busqueda. Se utilizo el entorno de desarrollo: Create React App",
      gitHub: "https://github.com/GastonSoliz/RyM-App-WithServer",
      prevEN: "Important technologies used:",
      prevES: "Tecnologias importantes usadas:",
      tech: [js, react, css, node, express, postgresql],
      images: [photo0RM, photo1RM, photo2RM, photo3RM, photo4RM],
      demo: "https://rickandmortyapp-gastonsolz.vercel.app/",
    },
    {
      name: "Drivers App",
      typeEN: "Academic Individual project",
      typeES: "Proyecto Individual Academico",
      descriptionEN:
        "Drivers API was made to extract data from a local API what contains information about Formula 1 Drivers, it includes their teams (which were saved in database), the purpose of this aplication was to make a complete CRUD, navigation bar, search filters. The development environment used were: Vite.js",
      descriptionES:
        "Drivers API se realizo para extraer datos de una API local que contenia informacion de Corredores de la Formula 1, incluidos sus equipos (los cuales se guardaron en la base de datos), el proposito de esta aplicacion fue realizar un CRUD completo, visible barra de navegacion, filtros de busqueda. Se utilizo el entorno de desarrollo: Vite.js",
      prevEN: "Important technologies used:",
      prevES: "Tecnologias importantes usadas:",
      tech: [js, react, css, node, express, postgresql],
      gitHub: "https://github.com/GastonSoliz/cr-pi-drivers-main",
      images: [photo0DR, photo1DR, photo2DR],
      demo: "https://cr-pi-drivers-main-beta.vercel.app/",
    },
    {
      name: "Eventify App",
      typeEN: "Academic Group project",
      typeES: "Proyecto Grupal Academico",
      descriptionEN:
        "The `EventifyPro` project is an E-Commerce to sell events, a registration and login with Auth0 Authentication, Admin and SuperAdmin Dashboard, Payment Gateway from MercadoPago with Cart, Event Carrousel, complete CRUD of Events and User, Search filters of Events, Reviews were implemented. The development environment used were: Next.js",
      descriptionES:
        "El proyecto `EventifyPro` es un E-Commerce para vender eventos, se implemento un registro y login con Autenticacion Auth0, Dashboard de Admin y SuperAdmin, Pasarela de pagos de MercadoPago con carrito , Carrousel de Eventos, CRUD completo de Eventos y Usuario, Filtro de busqueda de eventos, Reseñas. Se utilizo el entorno de desarrollo: Next.js",
      prevEN: "Important technologies used:",
      prevES: "Tecnologias importantes usadas:",
      tech: [js, next, tailwind, node, express, postgresql],
      gitHub: "https://github.com/Eventify-PF",
      images: [
        photo0EP,
        photo1EP,
        photo2EP,
        photo3EP,
        photo4EP,
        photo5EP,
        photo6EP,
      ],
      demo: "",
    },
  ];

  return (
    <div className={style.cardsContainer}>
      {projects.map((project) => (
        <WorkCard project={project} lang={lang} key={project.name} />
      ))}
    </div>
  );
}
