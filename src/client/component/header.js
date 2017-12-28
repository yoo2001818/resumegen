import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Contact from './contact';

import '../style/header.scss';

export default function Header({ vcard: { name, subName, contact } }) {
  return (
    <header className='header-component'>
      <div className='title'>
        <h1 className='name'>{ name }</h1>
        { subName && (
          <span className='sub-name'>{ subName }</span>
        ) }
      </div>
      <Contact contact={contact} />
    </header>
  );
}

Header.propTypes = {
  vcard: PropTypes.object,
};
