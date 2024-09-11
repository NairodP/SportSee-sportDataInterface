/* eslint-disable react/prop-types */
import "/src/css/components/verticalNavbar.css";
import burgerIcon from "../assets/img/hamburger.svg";
import yogaIcon from "../assets/img/yoga-icon.png";
import natationIcon from "../assets/img/natation-icon.png";
import veloIcon from "../assets/img/velo-icon.png";
import muscuIcon from "../assets/img/muscu-icon.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function VerticalNavbar({ isDataLoaded }) {

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
      {isDataLoaded && windowWidth < 1024 && (
        <button className="displayNav" onClick={toggleNav}>
          <img src={burgerIcon} alt="Menu" />
        </button>
      )}

      {showNav && (
        <nav className="vertical-nav">
          <ul>
            <li>
              <Link to="/profil">
                <img src={yogaIcon} alt="Yoga Logo" />
              </Link>
            </li>
            <li>
              <Link to="/profil">
                <img src={natationIcon} alt="Natation Logo" />
              </Link>
            </li>
            <li>
              <Link to="/profil">
                <img src={veloIcon} alt="Vélo Logo" />
              </Link>
            </li>
            <li>
              <Link to="/profil">
                <img src={muscuIcon} alt="Musculation Logo" />
              </Link>
            </li>
          </ul>
          <p>&copy; SportSee 2020</p>
        </nav>
      )}
    </>
  );
}
