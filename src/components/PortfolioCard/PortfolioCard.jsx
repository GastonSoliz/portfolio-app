import style from "./portfoliocard.module.css";

export default function PortfolioCard({ project, lang }) {
  const cardStyle = { backgroundImage: `url(${project.images})` };

  return (
    <div className={style.allContainer}>
      <p>{lang === "es" ? project.descriptionES : project.descriptionEN}</p>
      <div className={style.cardContainer} style={cardStyle}>
        <div className={style.infoCard}>
          <h2>{project.name}</h2>
          {project.tech.map((t, index) => (
            <img src={t} key={index} loading="lazy" />
          ))}
        </div>
      </div>
    </div>
  );
}
