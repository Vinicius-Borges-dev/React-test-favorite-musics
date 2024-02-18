import { Link } from "react-router-dom";
import styles from "./index.module.css";

function Menu() {
  return (
    <>
      <ul className={`list-group list-group-horizontal justify-content-center fs-5 ${styles.menu}`}>
        <Link className="text-decoration-none">
          <li className="list-group-item border-0">Good vibes</li>
        </Link>
        <Link className="text-decoration-none">
          <li className="list-group-item border-0">Relax</li>
        </Link>
        <Link className="text-decoration-none">
          <li className="list-group-item border-0">Lo-fi</li>
        </Link>
      </ul>
    </>
  );
}

export default Menu;
