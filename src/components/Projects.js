import React from 'react';
import { Link } from 'react-router-dom';
import { Transition, TransitionGroup, CSSTransition } from 'react-transition-group';
import { isExternalLink } from '../helpers.js';
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
    this.handleProjectMouseOver = this.handleProjectMouseOver.bind(this);
    this.handleProjectMouseLeave = this.handleProjectMouseLeave.bind(this);
    this.renderProjectDescr = this.renderProjectDescr.bind(this);
    this.renderProjectItem = this.renderProjectItem.bind(this);
    this.renderProjectLink = this.renderProjectLink.bind(this);
  }
  handleProjectMouseOver(projectId, e) {
    const hovered = update(this.state.hovered, {[projectId]: {$set: true}});
    this.setState({hovered: hovered});
  }
  handleProjectMouseLeave(projectId, e) {
    const hovered = update(this.state.hovered, {[projectId]: {$set: false}});
    this.setState({hovered: hovered});
  }
  renderProjectDescr(project) {
    const duration = 200;
    return (
      <CSSTransition in={this.state.hovered[project.id]} classNames="project" timeout={duration} unmountOnExit>
        <div className="projects-text">
          <div className="projects-text-inner">
            <div className="projects-text-title">
              <h2>{project.title}</h2>
            </div>
            <div className="projects-text-subtitle">
              <div>
                <h3>
                  <span className="projects-text-subtitle-type">{project.type}</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&ndash;&nbsp;&nbsp;&nbsp;&nbsp;
                  {project.date}
                </h3>
              </div>
            </div>
            <div className="projects-text-body">
              <p>{project.desc}</p>
            </div>
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
    return (
      <li className="projects-list-project-item" 
          key={project.id}>
        <div className={project.styling + ' projects-general'}
             onMouseOver={(e) => this.handleProjectMouseOver(project.id, e)}
             onMouseLeave={(e) => this.handleProjectMouseLeave(project.id, e)}>
          {this.renderProjectDescr(project)}
        </div>
      </li>
    )
  }
  renderProjectLink(link) {
    let faIcon = ''
    const isExternal = isExternalLink(link.link);
    switch (link.type) {
      case 'demo':
        faIcon = 'icon far fa-play-circle fa-2x';
        break;
      case 'github':
        faIcon = 'icon fab fa-github fa-2x';
        break;
    }
    if (isExternal) {
      return (
        <li key={link.id}>
        <a href={link.link} target="_blank">
          <i className={faIcon}></i>
          <p>{link.descr}</p>
        </a>
      </li>
      )
    } else {
      return (
        <li key={link.id}>
          <Link to={link.link} target="_blank">
            <i className={faIcon}></i>
            <p>{link.descr}</p>
          </Link>
        </li>
      )
    }
  }

  render() {
    return (
      <div className="projects">
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
