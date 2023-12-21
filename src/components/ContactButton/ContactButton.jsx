import { Link } from "react-router-dom";
import style from "./contactButton.module.css";
import { useLanguage } from "../../LanguageContext";

export default function ContactButton() {
  const { lang } = useLanguage();

  return (
    <div className={style.contactBtnContainer}>
      <Link to="/contact">
        <button>{lang === "es" ? "Contactame!" : "Contact me!"}</button>
      </Link>
    </div>
  );
}
