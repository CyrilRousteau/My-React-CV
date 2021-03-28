import React from 'react';
import Navigation from '../components/Navigation';
// import bgImage from '../assets/images/bg.jpeg';

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Cyril Rousteau</h1>
          <h2>Développeur Front-end.<span></span></h2>
          <div className="pdf">
          <a href="./assets/Document 5.pdf" target="_blank">Télécharger CV
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
