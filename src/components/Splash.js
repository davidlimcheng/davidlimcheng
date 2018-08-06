import React from 'react';
import Filter from './Filter';
import Projects from './Projects';

const navLinks = {
  link1: {
    name: 'PROJECTS',
    url: '/projects'
  }
}

class Splash extends React.Component {
  constructor() {
    super();
    this.state = {
      navLinks: navLinks
    }
  }
  render() {
    return (
      <div className="splash">
        <Filter className="filter" />
        <Projects className="projects" />
      </div>
    )
  }
}

export default Splash;
