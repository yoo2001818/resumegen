import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './header';

import '../style/page.scss';

export default function Page({ state }) {
  return (
    <div className='page-component'>
      <Header vcard={state.vcard} />
    </div>
  );
}

Page.propTypes = {
  state: PropTypes.object,
};
