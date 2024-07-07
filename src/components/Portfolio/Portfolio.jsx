import { Link } from "react-router-dom";
import { useLanguage } from "../../LanguageContext";
import PortfolioCardList from "../PortfolioCardList/PortfolioCardList";
import style from "./portfolio.module.css";

export default function Work() {
  const { lang } = useLanguage();

  return (
    <div className={style.workContainer}>
      <div className={style.textContainer}>
        <h2>Portfolio</h2>
        <h2>
          {lang === "es"
            ? "Aqui se pueden ver los proyectos en los que he trabajado por mi cuenta o como parte de un equipo."
            : "Here you can see the projects i have been working on my own or as part of a team."}
        </h2>
      </div>
      <PortfolioCardList lang={lang} />
      <Link to="/work">
        <button>
          {lang === "es"
            ? "Conoce mas proyectos aqui!"
            : "Learn about more project here!"}
        </button>
      </Link>
    </div>
  );
}
