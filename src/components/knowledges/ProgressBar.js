import React from 'react';

const ProgressBar = (props) => (
  <div className={props.className}>
    <h3>{props.title}</h3>
    <div className="years">
      <span>Années d'experience</span>
      <span>6 mois</span>
      <span>1 an</span>

    </div>
    <div>
      {
          props.languages.map((item) => {
            const xpyears = 1;
            const progressBar = `${item.xp / xpyears * 100}%`;

            return (
              <div key={item.id} className="languagesList">
                <li>{item.value}</li>
                <div
                  className="progressBar"
                  style={{ width: progressBar }}
                />
              </div>
            );
          })
        }
    </div>
  </div>
);

export default ProgressBar;
