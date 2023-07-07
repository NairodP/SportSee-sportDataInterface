import "/src/css/components/verticalNavbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function VerticalNavbar() {
  const [showNav, setShowNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setShowNav(windowWidth >= 1024);
  }, [windowWidth]);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      {windowWidth < 1024 && (
        <button className="displayNav" onClick={toggleNav}>
          <img src="/src/assets/img/hamburger.svg" alt="Menu" />
        </button>
      )}

      {showNav && (
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
          <p>&copy; SportSee 2020</p>
        </nav>
      )}
    </>
  );
}
