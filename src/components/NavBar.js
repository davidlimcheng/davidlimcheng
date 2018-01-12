import React from 'react';

class NavBar extends React.Component {
  constructor() {
    super();
    this.renderNavItem = this.renderNavItem.bind(this);
  }
  renderNavItem(key) {
    return (
      <li key={key}>
        <a href={this.props.navLinks[key].url}>{this.props.navLinks[key].name}</a>
      </li>
    )
  }

  render() {
    return (
      <ul className="navigation">
        {Object.keys(this.props.navLinks).map(this.renderNavItem)}
      </ul>
    )
  }
}

export default NavBar;
