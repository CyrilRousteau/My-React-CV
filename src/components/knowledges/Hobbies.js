import React from 'react';

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <i className= "fas fa-globe-americas"></i>
          <span>Voyages</span> 
        </li>
        <li className="hobby">
          <i className= "fas fa-anchor"></i>
          <span>Navigation</span> 
        </li>
        <li className="hobby">
          <i className= "fas fa-rocket"></i>
          <span>Cosmologie</span> 
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
