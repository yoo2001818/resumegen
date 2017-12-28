import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/section.scss';

export default function Section({ title, subtitle, children }) {
  return (
    <section className='section-component'>
      <h2 className='header'>
        <span className='title'>{ title }</span>
        { subtitle && (
          <small className='subtitle'>{ subtitle }</small>
        ) }
      </h2>
      <div className='content'>
        { children }
      </div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  children: PropTypes.node,
};
