import React from 'react';
import WiredCheckbox from 'wired-checkbox';

class Filter extends React.Component {
  constructor() {
    super();
  }
  render () {
    return (
      <ul className="filter">
        <wired-checkbox text="Projects" checked disabled></wired-checkbox>
      </ul>
    )
  }
}

export default Filter;