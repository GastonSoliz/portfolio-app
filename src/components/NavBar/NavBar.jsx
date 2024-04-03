import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./nav.module.css";
import bars from "../../assets/bars-solid.svg";
import { useState } from "react";
import ToggleButton from "../ToggleButton/ToggleButton";
import { useLanguage } from "../../LanguageContext";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const { lang } = useLanguage();
  const location = useLocation();
  console.log(location.pathname);

  function handleBar() {
    setNav(!nav);
  }

  return (
    <div className={style.navMobile}>
      <div onClick={handleBar} className={style.navMobileClose}>
        <img src={bars} width={30} height={30} />
      </div>
      {location.pathname === "/" ? (
        <ul className={`${style.nav} ${nav ? style.open : ""}`}>
          <li>
            <a href="#home" onClick={handleBar}>
              {lang === "es" ? "Inicio" : "Home"}
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={handleBar}>
              {lang === "es" ? "Projectos" : "Projects"}
            </a>
          </li>
          <li>
            <Link to="/about" onClick={handleBar}>
              {lang === "es" ? "Sobre mi" : "About me"}
            </Link>
          </li>
          <li>
            <a href="#contact" onClick={handleBar}>
              {lang === "es" ? "Contacto" : "Contact"}
            </a>
          </li>
        </ul>
      ) : (
        <ul className={`${style.nav} ${nav ? style.open : ""}`}>
          <li>
            <Link to="/" onClick={handleBar}>
              {lang === "es" ? "Inicio" : "Home"}
            </Link>
          </li>
          <li>
            <Link to="/work" onClick={handleBar}>
              {lang === "es" ? "Projectos" : "Projects"}
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleBar}>
              {lang === "es" ? "Sobre mi" : "About me"}
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleBar}>
              {lang === "es" ? "Contacto" : "Contact"}
            </Link>
          </li>
        </ul>
      )}
      <ToggleButton />
    </div>
  );
}
