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
      description:
        "Aplicacion Fullstack con login, carrousel, seleccion de personajes, opcion de favoritos y filtros de busqueda",
    },
    {
      name: "Drivers App",
      images: photo0DR,
      tech: [react, node],
      description: "Operaciones CRUD sobre corredores, con filtros de busqueda",
    },
    {
      name: "Eventify App",
      images: photo0EP,
      tech: [next, node],
      description:
        "E-Commerce completo sobre Eventos, que incluye: Pasarela de pagos, Login, Autenticacion de usuario, Dashboard, Reviews, Filtros de busqueda",
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
