import { useLanguage } from "../../LanguageContext";
import style from "./toggleButton.module.css";
import es from "../../assets/spanish.png";
import en from "../../assets/english.png";

export default function ToggleButton() {
  const { lang, handleToggle } = useLanguage();
  return (
    <div className={style.toggleContainer}>
      <h2>{lang === "es" ? "Language" : "Lenguaje"}</h2>
      <label>
        <span>{lang === "es" ? "Spanish" : "Español"}</span>
        <img src={es} width={25} height={25} />
        <input
          type="checkbox"
          onChange={handleToggle}
          className={style.toggleInput}
        />
        <img src={en} width={35} height={40} />
        <span>{lang === "es" ? "English" : "Ingles"}</span>
      </label>
    </div>
  );
}
