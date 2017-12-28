import React, { Component } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

export default function Marked({ children }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: marked(children) }} />
  );
}

Marked.propTypes = {
  children: PropTypes.string,
};
