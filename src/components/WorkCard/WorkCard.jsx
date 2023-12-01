import { Link } from "react-router-dom";
import style from "./card.module.css";
import { useState } from "react";
import prev from "../../assets/left.png";
import next from "../../assets/right.png";

export default function WorkCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);

  function handlePrev() {
    setCurrentImage((prev) => prev - 1);
  }
  function handleNext() {
    setCurrentImage((prev) => prev + 1);
  }

  return (
    <div className={style.cardContainer}>
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
      <h4>{project.type}</h4>
      <div className={style.btnView}>
        {project.gitHub && (
          <Link to={project.gitHub}>
            <button>GitHub</button>
          </Link>
        )}
        {project.demo && (
          <Link to={project.demo}>
            <button>Live Demo!</button>
          </Link>
        )}
      </div>
    </div>
  );
}
