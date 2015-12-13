import React, { Component, PropTypes } from 'react';

import VCard from './VCard';

export default class App extends Component {
  render() {
    const { document } = this.props;
    return (
      <div id='container'>
        <VCard vcard={document.vcard} />
        { JSON.stringify(this.props.document) }
      </div>
    );
  }
}

App.propTypes = {
  document: PropTypes.object.isRequired
};
