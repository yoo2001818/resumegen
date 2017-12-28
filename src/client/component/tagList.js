import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/tagList.scss';

export default function TagList({ tags }) {
  return (
    <ul className='tag-list-component'>
      { tags.map((tag, i) => (
        <li className='tag' key={i}>{ tag }</li>
      )) }
    </ul>
  );
}

TagList.propTypes = {
  tags: PropTypes.array,
};
