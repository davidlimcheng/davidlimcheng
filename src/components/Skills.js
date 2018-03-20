import React from 'react';

class Skills extends React.Component {
  constructor() {
    super();
    this.renderSkill = this.renderSkill.bind(this);
  }
  renderSkill(key) {

  }
  render() {
    return (
      <div className="main-section skills">
        <div className="transparent-black">
          <div className="skills-container">
            <div className="section-title skills-title">
              <h1>Skills &amp; Education</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;
