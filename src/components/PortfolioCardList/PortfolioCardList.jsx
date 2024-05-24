import PortfolioCard from "../PortfolioCard/PortfolioCard";
import style from "./portfoliocardlist.module.css";
import photo0RM from "../../assets/R&MLogin.png";
import photo0DR from "../../assets/DRHome.png";
import photo0EP from "../../assets/EPHome.png";
import react from "../../assets/react.png";
import node from "../../assets/node.png";
import next from "../../assets/next.png";

export default function PortfolioCardList({ lang }) {
  const projects = [
    {
      name: "Rick & Morty App",
      images: photo0RM,
      tech: [react, node],
      descriptionES:
        "Aplicacion Fullstack con login, carrousel, extraer personajes desde API, seleccion de favoritos y filtros de busqueda",
      descriptionEN:
        "Fullstack App with login, carrousel, take characters from API, favorite selection, and search filters",
    },
    // {
    //   name: "Drivers App",
    //   images: photo0DR,
    //   tech: [react, node],
    //   descriptionES:
    //     "Operaciones CRUD sobre corredores, con filtros de busqueda",
    //   descriptionEN: "CRUD operation about drivers with search filters",
    // },
    {
      name: "Eventify App",
      images: photo0EP,
      tech: [next, node],
      descriptionES:
        "E-Commerce completo sobre Eventos, que incluye: Pasarela de pagos, Login, Autenticacion de usuario, Panel de configuracion, Reseñas, Filtros de busqueda",
      descriptionEN:
        "Complete E-Commerce about Events, it includes: Payment gateway, Login, User Authentication, Dashboard, Reviews, Search filters",
    },
  ];

  return (
    <div className={style.cardsContainer}>
      {projects.map((project) => (
        <PortfolioCard project={project} lang={lang} key={project.name} />
      ))}
    </div>
  );
}
