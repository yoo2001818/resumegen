import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
  render() {
    const { state } = this.props;
    return (
      <div id='container'>
        <pre>
          { JSON.stringify(state, null, 2) }
        </pre>
      </div>
    );
  }
}

App.propTypes = {
  state: PropTypes.object,
};
