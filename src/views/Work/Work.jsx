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
            ? "Aqui se pueden ver los proyectos en los que he trabajado por mi cuenta o como parte de un equipo. Estos fueron hechos mientras estaba aprendiendo en Soy Henry"
            : "Here you can see the projects i have been working on my own or as part of a team. These projects were made while i was learning at Soy Henry Bootcamp"}
        </h2>
      </div>
      <WorkCardList lang={lang} />
    </div>
  );
}
