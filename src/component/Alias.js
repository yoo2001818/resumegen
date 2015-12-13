import React, { Component, PropTypes } from 'react';

export default class Alias extends Component {
  render() {
    const { name } = this.props;
    if (typeof name === 'string') {
      return name;
    }
    return (
      <span className='alias-container'>
        <span className='name'>{ name.name }</span>
        <span className='alias'>{ name.alias }</span>
      </span>
    );
  }
}

Alias.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      alias: PropTypes.string
    }),
    PropTypes.shape({
      en: PropTypes.string.isRequired
    })
  ]).isRequired
};
