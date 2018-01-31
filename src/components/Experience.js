import React from 'react';

class Experience extends React.Component {
  constructor() {
    super();
    this.addHoveredJob = this.addHoveredJob.bind(this);
    this.addOrRemoveSelectedJob = this.addOrRemoveSelectedJob.bind(this);
    this.removeHoveredJob = this.removeHoveredJob.bind(this);
    this.renderExperienceItem = this.renderExperienceItem.bind(this);
    this.renderJobDescription = this.renderJobDescription.bind(this);
    this.renderMiddleBorder = this.renderMiddleBorder.bind(this);
  }
  addHoveredJob(e, key) {
    e.preventDefault();
    this.props.updateHoveredJob(this.props.experiences[key]);
  }
  addOrRemoveSelectedJob(e, key){
    e.preventDefault();
    const selectedJob = this.props.experiences[key];
    if (this.props.selectedJob && JSON.stringify(this.props.selectedJob) === JSON.stringify(selectedJob)) {
      this.props.removeSelectedJob();
    } else {
      this.props.updateSelectedJob(selectedJob);
    }
  }
  renderMiddleBorder() {
    let middleBorderColor = 'experience-middle-border-default';
    if (this.props.selectedJob) {
      middleBorderColor = 'experience-middle-border-' + this.props.selectedJob.id;
    } else if (this.props.hoveredJob) {
      middleBorderColor = 'experience-middle-border-' + this.props.hoveredJob.id;
    }
    return (
      <div className={"experience-middle-border " + middleBorderColor}></div>
    )
  }
  removeHoveredJob(e) {
    this.props.removeHoveredJob();
  }
  renderExperienceItem(key) {
    const job = this.props.experiences[key];
    let containerClass = 'experience-item-container';
    // If there is no selected job or there is a selected job and we are not rendering it, add the hover effects
    if (!this.props.selectedJob || (this.props.selectedJob && this.props.selectedJob.id !== key)) {
      containerClass += ' ' + key;
    }
    // If rendering the selected job, add a class for the permanent background color and font color changees
    if (this.props.selectedJob && this.props.selectedJob.id === key) {
      containerClass += ' selected-job experience-item-container-selected-' + key;
    }
    return (
      <li key={job.id} className="experience-item"
          onMouseEnter={(e) => this.addHoveredJob(e, key)}
          onMouseLeave={(e) => this.removeHoveredJob(e)}
          onClick={(e) => this.addOrRemoveSelectedJob(e, key)}>
        <div className={containerClass}>
          <div className="experience-item-title">
            <strong>{job.title}</strong>
          </div>
          <div className="experience-item-details">
            <i>{job.company}</i> &mdash; <i>{job.location}</i>
          </div>
        </div>
      </li>
    )
  }
  renderJobDescription() {
    let job = false;
    if (this.props.selectedJob) {
      job = this.props.selectedJob;
    } else if (this.props.hoveredJob) {
      job = this.props.hoveredJob;
    }
    if (job) {
      return (
        <div className="experience-description">
          <div className="experience-description-timeline">
            <h2 className="experience-description-timeline-header">Timeline:&nbsp;&nbsp;</h2><h3 className={'experience-'+job.id}>{job.timeline}</h3>
          </div>
          <h2>Summary:</h2>
          <p>{job.summary}</p>
          <h2 className="experience-description-list-header">Duties:</h2>
          <ul>
            {job.duties.map(function(duty){
              return (<li key={duty.id}><p>{duty.desc}</p></li>)
            })}
          </ul>
          <h2 className="experience-description-list-header">Main Skills:</h2>
          <ul>
            {job.skills.map(function(skill) {
              return (<li key={skill.id}><p>{skill.skill}</p></li>)
            })}
          </ul>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="main-section experience">
        <div className="transparent-black">
          <div className="experience-container">
            <div className="section-title experience-title">
              <h1>Experience</h1>
            </div>
            <div className="experience-list">
              <ul>
                {Object.keys(this.props.experiences).map(this.renderExperienceItem)}
              </ul>
            </div>
            {this.renderMiddleBorder()}
            <div className="experience-description-container">
              {this.renderJobDescription()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Experience;
