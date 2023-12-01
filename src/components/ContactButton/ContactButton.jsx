import { Link } from "react-router-dom";
import style from "./contactButton.module.css";

export default function ContactButton() {
  return (
    <div className={style.contactBtnContainer}>
      <Link to="/contact">
        <button>Contactame!</button>
      </Link>
    </div>
  );
}
