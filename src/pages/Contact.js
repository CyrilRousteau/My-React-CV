import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard} from 'react-copy-to-clipboard';

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header">
          <div className="contactBox">
            <h1>Contactez-moi</h1>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Nouméa</span>
              </li>

              <li>
                <i className="fas fa-mobile-alt"></i>
                <CopyToClipboard text="+687508864">
                  <span
                  className="clickInput" 
                  onClick={(

                  ) => {alert('Téléphone copié !');}}> +687 50 88 64
                  </span>
                </CopyToClipboard>
              </li>

              <li>
                <i className="fas fa-envelope"></i>
                <CopyToClipboard text="cyrilrousteau@gmail.com">
                  <span
                  className="clickInput" 
                  onClick={(

                  ) => {alert('E-mail copié !');}}> cyrilrousteau@gmail.com
                  </span>
                </CopyToClipboard>
              </li>

            </ul>
          </div>
          <div className="socialNetwork">
            <ul>
              <a href="https://www.linkedin.com/in/cyril-rousteau-132938170/?trk=people_directory&originalSubdomain=nc" target="_blank" rel="noopener noreferrer">
                <h4>Linkedin</h4>
                <i className="fab fa-linkedin"></i>
              </a>

              <a href="https://github.com/CyrilRousteau" target="_blank" rel="noopener noreferrer">
                <h4>Github</h4>
                <i className="fab fa-github"></i>
              </a>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
