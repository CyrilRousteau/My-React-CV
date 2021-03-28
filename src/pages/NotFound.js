import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <p className="error">404</p>
        <h3>Oups, désolé cette page n'existe pas</h3>
        <NavLink exact to ="/">
          <i className="fas fa-home"></i>
          <span>Accueil</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
