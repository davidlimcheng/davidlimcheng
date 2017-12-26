import React from 'react';
import NavBar from './NavBar';

class Intro extends React.Component {
  render() {
    return (
      <div className="main-section intro">
        <div className="transparent-black">
          <div className="intro-container">
            <div className="title">
              <div className="title-picture"></div>
              <div className="title-name">
                <h1>David L</h1>
                <h1>Cheng</h1>
                <p>Front-End // Back-End // Artificial Intelligence</p>
              </div>
            </div>
            <NavBar />
          </div>
        </div>
      </div>
    )
  }
}

export default Intro;
