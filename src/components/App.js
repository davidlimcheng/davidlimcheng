import React from 'react';
import Intro from './Intro';
import Experience from './Experience';
import Skills from './Skills';
import experiences from '../experiences.js';
import skills from '../technical_skills.js';
import education from '../education.js';
import certifications from '../certifications.js';

const navLinks = {
  link1: {
    name: 'EXPERIENCE',
    url: '#'
  },
  link2: {
    name: 'SKILLS & EDUCATION',
    url: '#'
  },
  link3: {
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
      certifications: certifications,
      experiences: experiences,
      skills: skills,
      hoveredJob: false,
      selectedJob: experiences.job1
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
        <Skills skills={this.state.skills} />
      </div>
    )
  }
}

export default App;
