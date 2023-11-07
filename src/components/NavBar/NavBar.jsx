import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Link to="/">
        <button>HOME</button>
      </Link>
      <Link to="/contact">
        <button>CONTACT</button>
      </Link>
      <Link to="/work">
        <button>WORK</button>
      </Link>
      <Link to="/about">
        <button>ABOUT</button>
      </Link>
    </>
  );
}
