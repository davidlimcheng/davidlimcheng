import React from 'react';
import Intro from './Intro';
import Experience from './Experience';
import experiences from '../experiences.js';

const navLinks = {
  link1: {
    name: 'EXPERIENCE',
    url: '#'
  },
  link2: {
    name: 'SKILLS',
    url: '#'
  },
  link3: {
    name: 'EDUCATION',
    url: '#'
  },
  link4: {
    name: 'INTERESTS',
    url: '#'
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.updateHoveredJob = this.updateHoveredJob.bind(this);
    this.updateSelectedJob = this.updateSelectedJob.bind(this);
    this.removeHoveredJob = this.removeHoveredJob.bind(this);
    this.removeSelectedJob = this.removeSelectedJob.bind(this);
    this.state = {
      navLinks: navLinks,
      experiences: experiences,
      hoveredJob: false,
      selectedJob: false
    }
  }
  updateHoveredJob(job) {
    this.setState({hoveredJob: job});
  }
  removeHoveredJob() {
    this.setState({hoveredJob: false});
  }
  updateSelectedJob(job) {
    this.setState({selectedJob: job});
  }
  removeSelectedJob() {
    this.setState({selectedJob: false});
  }
  render() {
    return (
      <div className="defaults">
        <Intro navLinks={this.state.navLinks}/>
        <Experience experiences={this.state.experiences}
            updateHoveredJob={this.updateHoveredJob}
            updateSelectedJob={this.updateSelectedJob}
            removeHoveredJob={this.removeHoveredJob}
            removeSelectedJob={this.removeSelectedJob}
            hoveredJob={this.state.hoveredJob}
            selectedJob={this.state.selectedJob}/>
      </div>
    )
  }
}

export default App;
