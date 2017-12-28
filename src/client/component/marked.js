import React, { Component } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

export default function Marked({ className, children }) {
  return (
    <div className={className}
      dangerouslySetInnerHTML={{ __html: marked(children) }} />
  );
}

Marked.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};
