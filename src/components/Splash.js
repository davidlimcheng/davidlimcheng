import React from 'react';
import Circles from './Circles';
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
      <Projects />
    )
  }
}

export default Splash;
