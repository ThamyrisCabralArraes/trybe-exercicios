import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hello extends Component {
  render() {
    const { user } = this.props;
    return (
      <h1>
        {user.name} {user.lastName}
      </h1>
    );
  }
}

Hello.prototype = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Hello;
