import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor() {
    super();
    this.renderNavItem = this.renderNavItem.bind(this);
  }
  renderNavItem(key) {
    return (
      <li key={key}>
        <Link to={this.props.navLinks[key].url}>{this.props.navLinks[key].name}</Link>
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
