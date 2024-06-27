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

  function handleBar() {
    setNav(!nav);
  }

  const redirrections = [
    { es: "Inicio", en: "Home", a: "#home", link: "/" },
    { es: "Projectos", en: "Projects", a: "#portfolio", link: "/work" },
    { es: "Sobre mi", en: "About me", a: "#skills", link: "/about" },
    { es: "Contacto", en: "Contact", a: "#contact", link: "/contact" },
  ];

  return (
    <div className={style.navMobile}>
      <div onClick={handleBar} className={style.navMobileClose}>
        <img src={bars} width={30} height={30} />
      </div>
      {location.pathname === "/" ? (
        <ul className={`${style.nav} ${nav ? style.open : ""}`}>
          {redirrections.map((red) => (
            <li>
              <a href={red.a} onClick={handleBar}>
                {lang === "es" ? red.es : red.en}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <ul className={`${style.nav} ${nav ? style.open : ""}`}>
          {redirrections.map((red) => (
            <li>
              <Link to={red.link} onClick={handleBar}>
                {lang === "es" ? red.es : red.en}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <ToggleButton />
    </div>
  );
}
