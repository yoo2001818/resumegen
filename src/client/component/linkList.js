import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/linkList.scss';

const LINK_LIST_TYPES = [
  { type: 'website', name: '보러가기' },
  { type: 'documentation', name: '문서' },
  { type: 'presentation', name: '발표자료' },
  { type: 'video', name: '동영상' },
];

export function LinkEntry({ name, value }) {
  return (
    <li className='link-entry-component'>
      <a href={value}>{ name }</a>
    </li>
  );
}

export default function LinkList({ item }) {
  return (
    <ul className='link-list-component'>
      { item.websites && item.websites.map((entry, i) => (
        <LinkEntry name={entry.name} value={entry.url} key={i} />
      )) }
      { LINK_LIST_TYPES.map(entry => item[entry.type] != null && (
        <LinkEntry name={entry.name} value={item[entry.type]}
          key={entry.type} />
      )) }
    </ul>
  );
}

LinkList.propTypes = {
  item: PropTypes.object,
};
