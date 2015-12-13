import React, { Component, PropTypes } from 'react';

import Alias from './Alias';

export default class VCard extends Component {
  render() {
    const { vcard } = this.props;
    return (
      <div className='vcard'>
        <h1 className='name'>
          <Alias name={ vcard.name } />
        </h1>
      </div>
    );
  }
}

VCard.propTypes = {
  vcard: PropTypes.object.isRequired
};
