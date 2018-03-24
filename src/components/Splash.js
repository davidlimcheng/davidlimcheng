import React from 'react';
import Intro from './Intro';

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
      <div className="defaults">
        <Intro navLinks={this.state.navLinks}/>
      </div>
    )
  }
}

export default Splash;
