import React from 'react';
import { NavLink } from 'react-router-dom';
import cyrilImage from '../assets/images/cyrilv3.png'


const Navigation = () => {

  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src={cyrilImage} alt="profil-cyril" />
          <h3> Cyril Rousteau</h3>
        </div>
      </div>

      <div className="navigation">
        <li>
          <ul>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </ul>
        </li>

        <li>
          <ul>
            <NavLink exact to="/competences" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </ul>
        </li>

        <li>
          <ul>
            <NavLink exact to="/portfolio" activeClassName="navActive">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </ul>
        </li>

        <li>
          <ul>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </ul>
        </li>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/cyril-rousteau-132938170/" target="-blank"
            rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          </li>

          <li>
            <a href="https://github.com/CyrilRousteau" target="-blank"
            rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          </li>
        </ul>
        <div className="signature">
          <p>© copyright - 2021</p>
        </div>
      </div>
      
    </div>
  );
};

export default Navigation;
