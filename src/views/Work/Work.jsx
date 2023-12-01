import WorkCardList from "../../components/WorkCardList/WorkCardList";
import style from "./work.module.css";

export default function Work() {
  return (
    <div className={style.workContainer}>
      <div className={style.textContainer}>
        <h1>Portfolio</h1>
        <h2>
          Aqui se puede ver alguno de los projectos en los que he trabajado por
          mi cuenta o como parte de un equipo. Estos fueron hechos mientras
          estaba aprendiendo en Soy Henry
        </h2>
      </div>
      <WorkCardList />
    </div>
  );
}
