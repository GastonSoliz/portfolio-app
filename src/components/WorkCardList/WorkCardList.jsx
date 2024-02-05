import WorkCard from "../WorkCard/WorkCard";
import style from "./cardList.module.css";
import photo0RM from "../../assets/R&MLogin.png";
import photo1RM from "../../assets/R&MHome.png";
import photo2RM from "../../assets/R&MFav.png";
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

export default function WorkCardList({ lang }) {
  const projects = [
    {
      name: "Rick & Morty App",
      typeEN: "Academic Individual project",
      typeES: "Proyecto Individual Academico",
      gitHub: "https://github.com/GastonSoliz/RyM-App-WithServer",
      images: [photo0RM, photo1RM, photo2RM],
      demo: "",
    },
    {
      name: "Drivers App",
      typeEN: "Academic Individual project",
      typeES: "Proyecto Individual Academico",
      gitHub: "https://github.com/GastonSoliz/cr-pi-drivers-main",
      images: [photo0DR, photo1DR, photo2DR],
      demo: "",
    },
    {
      name: "Eventify App",
      typeEN: "Academic Group project",
      typeES: "Proyecto Grupal Academico",
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
