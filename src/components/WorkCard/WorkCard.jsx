import { Link } from "react-router-dom";
import style from "./card.module.css";
import { useState } from "react";
import prev from "../../assets/left.png";
import next from "../../assets/right.png";
import github from "../../assets/github.svg";
import redirect from "../../assets/redirect.svg";

export default function WorkCard({ project, lang }) {
  const [currentImage, setCurrentImage] = useState(0);

  function handlePrev() {
    setCurrentImage((prev) => prev - 1);
  }
  function handleNext() {
    setCurrentImage((prev) => prev + 1);
  }

  return (
    <div className={style.cardContainer}>
      <div className={style.leftSide}>
        {/* <h3>{lang === "es" ? project.typeES : project.typeEN}</h3> */}
        <h2>{project.name}</h2>
        <div className={style.carrouselContainer}>
          {currentImage !== 0 && (
            <button onClick={handlePrev} className={style.carrouselBtn}>
              <img src={prev} />
            </button>
          )}
          <img
            src={project.images[currentImage]}
            className={style.carrouselImg}
          />
          {project.images.length - 1 !== currentImage && (
            <button onClick={handleNext} className={style.carrouselBtn}>
              <img src={next} />
            </button>
          )}
        </div>
      </div>
      <div className={style.rightSide}>
        <div className={style.topSide}>
            {/* <h4>{lang === "es" ? project.typeES : project.typeEN}</h4> */}
          <p>
            {lang === "es" ? project.descriptionES : project.descriptionEN}
          </p>
          {/* <p>{lang === "es" ? project.prevES : project.prevEN}</p>
          {project.tech.map((t, index) => (
            <img src={t} key={index} />
          ))} */}
        </div>
        <div className={style.bottomSide}>
          <div className={style.techSide}>
          <h4>{lang === "es" ? project.typeES : project.typeEN}</h4>
          <div className={style.bottomTech}>
            {project.tech.map((t, index) => (
              <img src={t} key={index} className={style.techImg}/>
            ))}
          </div>
          </div>
          <div className={style.btnView}>
            {project.gitHub && (
              <a href={project.gitHub} target="_blank">
                <button>
                  GitHub
                  <img src={github} width={25} height={25} />
                </button>
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank">
                <button>
                  Live Demo <img src={redirect} width={25} height={25} />
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
