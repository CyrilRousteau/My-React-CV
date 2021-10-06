import React from 'react';

const Experience = () => {
  return (
    <div className="experience">
      <h3>Experience</h3>
      
      <div className="exp-1">
        <h4>SCSI SKAZY Dev Junior Front-End</h4>
        <h5>juin - aout 2021</h5>
        <p>Création application tablette IOS côté front pour la GBNC, intégration page site gamelle SuperYa.nc, integration DPOconsulting.nc<br></br>
          - Techno : ReactNative, Next.js
          <br></br>
          - Equipe de développeurs : 2 back, 2 Front
          <br></br>
          - Méthode SCRUM d'une durée totale de 30 jours, maîtrise outil Git
        </p>
      </div>

      <div className="exp-2">
        <h4>Création d'un site internet</h4>
        <h5>mars - 2021</h5>
        <p>Création d'une plateforme d'échange de plat lors d'un projet de fin de fin de formation en tant que lead dev Front.<br></br>
          - Techno : React, Node.JS, Express, PostgreSql
          <br></br>
          - Equipe de développeurs : 2 back, 2 Front
          <br></br>
          - Méthode SCRUM sur 4 sprints d'une durée totale de 25 jours
        </p>
      </div>
      <div className="exp-3">
        <h4>Ecole O'clock - Bac +2</h4>
        <h5>2020 - 2021</h5>
        <p>Formation au métier de développeur web et mobile fullstack JavaScript spécialité React.<br></br>
            Découverte des environnements :<br></br>
            - HTML, SCSS, JavaScript, React, Redux côté Front<br></br>
            - Node.js, Express, PostgreSQL, architecture et projets, conception d'API,   projets en équipe, déploiement, CMS côté back
        </p>
      </div>
      {/* <div className="exp-3">
        <h4>Planificateur contrat en maintenance industriel</h4>
        <h5>2010 - 2019</h5>
        <p>Planification et coordination de la maintenance d'engins de production.<br></br>
        Définition les opérations de maintenance à effectuer sur les machines en fonction des plans de
maintenance et des informations techniques.<br></br>
Participation à des projets à caractère technico-administratif et à l’amélioration continue des
process grande visite
        </p>
      </div> */}
    </div>
  );
};

export default Experience;
