import React from 'react';

const links = {
  link1: {
    name: 'ABOUT',
    url: '#'
  },
  link2: {
    name: 'WORK EXPERIENCE',
    url: '#'
  },
  link3: {
    name: 'SKILLS',
    url: '#'
  },
  link4: {
    name: 'EDUCATION',
    url: '#'
  },
  link5: {
    name: 'INTERESTS',
    url: '#'
  }
}

class NavBar extends React.Component {
  constructor() {
    super();
    this.renderNavItem = this.renderNavItem.bind(this);
  }
  renderNavItem(key) {
    return (
      <li key={key}>
        <a href={links[key].url}>{links[key].name}</a>
      </li>
    )
  }

  render() {
    const linkIds = Object.keys(links);
    return (
      <ul className="navigation">
        {Object.keys(links).map(this.renderNavItem)}
      </ul>
    )
  }
}

export default NavBar;
