import React from 'react';
import Projects from './Projects';

class Splash extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="splash">
        <Projects className="projects" />
      </div>
    )
  }
}

export default Splash;
