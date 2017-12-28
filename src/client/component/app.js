import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Page from './page';

import '../style/app.scss';

export default function App({ state }) {
  // Shouldn't take a while to load.
  if (state == null) {
    return (
      <p>Loading...</p>
    );
  }
  if (state.error) {
    return (
      <p>An error occurred while loading the data.</p>
    );
  }
  return (
    <div className='app'>
      <Page state={state} />
    </div>
  );
}

App.propTypes = {
  state: PropTypes.object,
};
