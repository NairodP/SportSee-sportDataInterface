import "/src/css/components/verticalNavbar.css";
import { Link } from "react-router-dom";

export default function verticalNavbar() {
  return (
    <div className="vertical-nav-container">
      <nav className="vertical-nav">
        <ul>
          <li>
            <Link to="/profil">
              <img src="/src/assets/img/yoga-icon.png" alt="Yoga Logo" />
            </Link>
          </li>
          <li>
            <Link to="/profil">
              <img src="/src/assets/img/natation-icon.png" alt="Natation Logo" />
            </Link>
          </li>
          <li>
            <Link to="/profil">
              <img src="/src/assets/img/velo-icon.png" alt="Vélo Logo" />
            </Link>
          </li>
          <li>
            <Link to="/profil">
              <img src="/src/assets/img/muscu-icon.png" alt="Musculation Logo" />
            </Link>
          </li>
        </ul>
        <p>Copyright, SportSee 2020</p>
      </nav>
    </div>
  );
}