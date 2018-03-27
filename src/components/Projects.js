import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../projects.js';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: projects
    }
    this.renderProjectItem = this.renderProjectItem.bind(this);
    this.renderProjectKeyword = this.renderProjectKeyword.bind(this);
    this.renderProjectLink = this.renderProjectLink.bind(this);
  }
  renderProjectItem(project) {
    let transitionEffect = '';
    if (project.orientation === 'portrait') {
      transitionEffect = 'hvr-sweep-to-bottom';
    } else {
      transitionEffect = 'hvr-sweep-to-right';
    }
    return (
      <li className="projects-list-project-item" key={project.id}>
        <div className={transitionEffect + ' ' + project.styling}>
          <div className="projects-text">
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
      case 'github':
        faIcon = 'icon fab fa-github fa-2x'
    }
    return (
      <li key={link.id}>
        <a href={link.link} target="_blank">
          <i className={faIcon}></i>
          <p>{link.descr}</p>
        </a>
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
          <ul>
            {this.state.projects.map(this.renderProjectItem)}
          </ul>
        </div>
      </div>
    )
  }
}

export default Projects;
