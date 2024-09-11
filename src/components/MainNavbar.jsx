import { Link, NavLink } from "react-router-dom";
import "/src/css/components/mainNavbar.css";

import mainLogo from "../assets/img/mainLogo.png";


// Composant Navbar affichant la barre de navigation horizontale.
export default function mainNavbar() {
  return (
      <nav className="nav">
        {/* Logo redirigeant vers la page d'accueil */}
        <Link to="/" className="logo">
          <img src={mainLogo} alt="Logo" />
        </Link>
        <ul>
          <li>
            {/* Lien actif pour la page "Accueil" */}
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            {/* Lien actif pour la page "Profil" */}
            <NavLink to="/profil">Profil</NavLink>
          </li>
          <li>
            {/* Lien actif pour la page "Réglage" */}
            <NavLink to="/setting">Réglage</NavLink>
          </li>
          <li>
            {/* Lien actif pour la page "Communauté" */}
            <NavLink to="/community">Communauté</NavLink>
          </li>
        </ul>
      </nav>
  );
}