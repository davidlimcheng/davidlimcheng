import React from 'react';
import { Link } from 'react-router-dom';
import { Transition, TransitionGroup, CSSTransition } from 'react-transition-group';
import projects from '../projects.js';
import update from 'immutability-helper';

const isRelativeLink = function(link) {
  if (link.startsWith('/')) {
    return true;
  } else {
    return false;
  }
}

const createHoveredObject = function() {
  let hovered = {};
  projects.forEach((project) => {
    hovered[project.id] = false;
  });
  return hovered;
}

class Projects extends React.Component {
  constructor() {
    super();
    let hovered = createHoveredObject();
    this.state = {
      hovered: hovered,
      projects: projects
    }
    this.handleProjectMouseEnter = this.handleProjectMouseEnter.bind(this);
    this.handleProjectMouseLeave = this.handleProjectMouseLeave.bind(this);
    this.renderProjectDescr = this.renderProjectDescr.bind(this);
    this.renderProjectItem = this.renderProjectItem.bind(this);
    this.renderProjectKeyword = this.renderProjectKeyword.bind(this);
    this.renderProjectLink = this.renderProjectLink.bind(this);
  }
  handleProjectMouseEnter(projectId, e) {
    const hovered = update(this.state.hovered, {[projectId]: {$set: true}});
    this.setState({hovered: hovered});
  }
  handleProjectMouseLeave(projectId, e) {
    const hovered = update(this.state.hovered, {[projectId]: {$set: false}});
    this.setState({hovered: hovered});
  }
  renderProjectDescr(project) {
    const duration = 300;
    return (
      <CSSTransition in={this.state.hovered[project.id]} classNames="project" timeout={duration} unmountOnExit>
        <div className="projects-text">
          <div className="projects-text-inner">
            <div className="projects-text-title">
              <h2>{project.title}</h2>
            </div>
            <div className="projects-text-body">
              <p>{project.desc}</p>
              <ul>
                {project.keywords.map(this.renderProjectKeyword)}
              </ul>
            </div>
            <div className="projects-text-body-border-bottom"></div>
            <div className="projects-text-link-list">
              <ul>
                {project.links.map(this.renderProjectLink)}
              </ul>
            </div>
          </div>
        </div>
      </CSSTransition>
    )
  }
  renderProjectItem(project) {
    let transitionEffect = '';
    if (project.orientation === 'portrait') {
      transitionEffect = 'hvr-sweep-to-bottom';
    } else {
      transitionEffect = 'hvr-sweep-to-right';
    }
    let projectIndex = this.state.projects.findIndex((stateProject) => {
      return (project.id === stateProject.id);
    });
    return (
      <li className="projects-list-project-item" 
          key={project.id}
          onMouseEnter={(e) => this.handleProjectMouseEnter(project.id, e)}
          onMouseLeave={(e) => this.handleProjectMouseLeave(project.id, e)}>
        <div className={project.styling + ' projects-general'}>
          {this.renderProjectDescr(project)}
        </div>
      </li>
    )
  }
  renderProjectKeyword(keyword) {
    return (
      <li key={keyword.id}>{keyword.keyword}</li>
    )
  }
  renderProjectLink(link) {
    let faIcon = ''
    switch (link.type) {
      case 'demo':
        faIcon = 'icon far fa-play-circle fa-2x';
        break;
      case 'github':
        faIcon = 'icon fab fa-github fa-2x';
        break;
    }
    return (
      <li key={link.id}>
        <Link to={link.link} target="_blank">
          <i className={faIcon}></i>
          <p>{link.descr}</p>
        </Link>
      </li>
    )
  }

  render() {
    return (
      <div className="projects">
        <div className="projects-arrow">
          <Link to="/">
            <h1><i className="far fa-arrow-alt-circle-left fa-2x hvr-bounce-in"></i></h1>
          </Link>
        </div>
        <div className="projects-list">
          <TransitionGroup component="ul">
            {this.state.projects.map(this.renderProjectItem)}
          </TransitionGroup>
        </div>
      </div>
    )
  }
}

export default Projects;
