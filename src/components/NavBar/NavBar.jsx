import { Link, useLocation } from "react-router-dom";
import style from "./nav.module.css";
import home from "../../assets/home.png";
import contact from "../../assets/contact.png";
import work from "../../assets/work.png";
import about from "../../assets/about.png";

export default function NavBar() {
  const location = useLocation();
  return (
    <div className={style.navContainer}>
      <Link to="/">
        <img src={home} width="35" height="35" />
      </Link>
      <Link to="/work">
        <img src={work} width="35" height="35" />
      </Link>
      <Link to="/about">
        <img src={about} width="35" height="35" />
      </Link>
      <Link to="/contact">
        <img src={contact} width="35" height="35" />
      </Link>
    </div>
  );
}
