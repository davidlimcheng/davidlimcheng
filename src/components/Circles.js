import React from 'react';

class Circles extends React.Component {
  constructor() {
    super();
  }
  render () {
    return (
      <div className="circles-container" viewbox="0 0 340 340">
        <svg className="circles">
          <circle cx="170" cy="170" r="160"/>
          <circle cx="170" cy="170" r="135"/>
          <circle cx="170" cy="170" r="110"/>
          <circle cx="170" cy="170" r="85"/>
        </svg>
      </div>
    )
  }
}

export default Circles;