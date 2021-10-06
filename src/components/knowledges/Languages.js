import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
  state ={
    languages: [
      { id: 1, value: 'HTML', xp: 0.9 },
      { id: 2, value: 'Css', xp: 0.9 },
      { id: 3, value: 'Javascript', xp: 0.9 },
      { id: 4, value: 'Node.js', xp: 0.9 },

    ],
    frameworks: [
      { id: 1, value: 'React', xp: 0.9 },
      { id: 2, value: 'Material UI', xp: 0.9 },
      { id: 3, value: 'Sass', xp: 0.9 },
      { id: 4, value: 'Express.js', xp: 0.5 },
      { id: 5, value: 'PostgreSQL', xp: 0.4 },
      { id: 6, value: 'Wordpress', xp: 0.2 },

    ],
  }

  render() {
    const { languages, frameworks } = this.state;

    return (
      <div>
        <div className="languagesFrameworks">
          <ProgressBar
            languages={languages}
            className="languagesDisplay"
            title="languages"
          />
          <ProgressBar
            languages={frameworks}
            className="frameworksDisplay"
            title="frameworks & bibliothèques"
          />
        </div>

      </div>
    );
  }
}

export default Languages;
