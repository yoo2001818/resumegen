import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Marked from './marked';

import '../style/summary.scss';

export default function Summary({ children }) {
  return (
    <div className='summary-component'>
      <Marked>{ children }</Marked>
    </div>
  );
}

Summary.propTypes = {
  children: PropTypes.string,
};
