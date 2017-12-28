import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../style/contact.scss';

const CONTACT_TYPES = [
  { type: 'email', prefix: 'mailto:' },
  { type: 'phone', prefix: 'tel:' },
  { type: 'website', prefix: '' },
  { type: 'github', prefix: 'https://github.com/', displayPrefix: '@' },
];

export function ContactEntry({ schema, value }) {
  const { type, prefix = '', displayPrefix = '' } = schema;
  return (
    <li className={classNames('contact-entry-component', type)}>
      <a href={prefix + value}>{ displayPrefix + value }</a>
    </li>
  );
}

export default function Contact({ contact }) {
  // Contact is always in the order: email, phone, website, github.
  return (
    <ul className='contact-component'>
      { CONTACT_TYPES.map(entry => contact[entry.type] != null && (
        <ContactEntry schema={entry} value={contact[entry.type]}
          key={entry.type} />
      )) }
    </ul>
  );
}

Contact.propTypes = {
  contact: PropTypes.object,
};
