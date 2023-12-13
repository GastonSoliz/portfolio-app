import { Link } from "react-router-dom";
import style from "./nav.module.css";
import home from "../../assets/home.png";
import contact from "../../assets/contact.png";
import work from "../../assets/work.png";
import about from "../../assets/about.png";
import bars from "../../assets/bars-solid.svg";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [nav, setNav] = useState(false);

  function handleBar() {
    setNav(!nav);
  }

  return (
    <div className={style.navMobile}>
      <div onClick={handleBar} className={style.navMobileClose}>
        <img src={bars} width={30} height={30} />
      </div>
      <ul className={`${style.nav} ${nav ? style.open : ""}`}>
        <li>
          <Link to="/" onClick={handleBar}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/work" onClick={handleBar}>
            Projectos
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleBar}>
            Sobre mi
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleBar}>
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  );
}
