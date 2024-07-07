import { useLanguage } from "../../LanguageContext";
import WorkCardList from "../../components/WorkCardList/WorkCardList";
import style from "./work.module.css";

export default function Work() {
  const { lang } = useLanguage();

  return (
    <div className={style.workContainer}>
      <div className={style.textContainer}>
        <h2>Portfolio</h2>
        <p>
          {lang === "es"
            ? "Aqui se pueden ver los proyectos en los que he trabajado por mi cuenta o como parte de un equipo de manera mas detallada."
            : "Here you can see the projects i have been working on my own or as part of a team in details "}
        </p>
      </div>
      <WorkCardList lang={lang} />
    </div>
  );
}
