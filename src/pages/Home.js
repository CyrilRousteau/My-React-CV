import React from 'react';
import Navigation from '../components/Navigation';
import CV from '../assets/images/CV.png';
import opquast from '../assets/images/opquast.png';

const Home = () => (
  <div className="home">
    <Navigation />
    <div className="homeContent">
      <div className="content">
        <h1>Cyril Rousteau</h1>
        <h2>Développeur Front-end.<span /></h2>
        {/* <div className="pdf">
          <a href={CV} download="CV">Télécharger CV
          </a>
        </div> */}
        <div className="opquast">
          <img src={opquast}/>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
