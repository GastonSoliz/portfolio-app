import { Link } from "react-router-dom";

export default function ContactButton() {
  return (
    <>
      <Link to="/contact">
        <button>Contact me!</button>
      </Link>
    </>
  );
}
