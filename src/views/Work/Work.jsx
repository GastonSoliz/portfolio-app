import { useLanguage } from "../../LanguageContext";
import WorkCardList from "../../components/WorkCardList/WorkCardList";
import style from "./work.module.css";

export default function Work() {
  const { lang } = useLanguage();

  return (
    <div className={style.workContainer}>
      <div className={style.textContainer}>
        <h1>Portfolio</h1>
        <h2>
          {lang === "es"
            ? "Aqui se pueden ver los proyectos en los que he trabajado por mi cuenta o como parte de un equipo de manera mas detallada."
            : "Here you can see the projects i have been working on my own or as part of a team in details "}
        </h2>
      </div>
      <WorkCardList lang={lang} />
    </div>
  );
}
