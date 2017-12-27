import React, { Component, PropTypes } from 'react';

export default class Html extends Component {
  render() {
    return (
      <html>
        <head>
          <title>Test document</title>
          <meta charSet='utf-8' />
          <link rel='stylesheet' type='text/css' href='./style/default.css' />
        </head>
        <body>
          { this.props.children }
        </body>
      </html>
    );
  }
}

Html.propTypes = {
  children: PropTypes.node.isRequired
};
