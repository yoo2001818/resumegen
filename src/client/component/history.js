import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Marked from './marked';

import '../style/history.scss';

export function HistoryEntry({ item }) {
  return (
    <div className='history-entry-component'>
      <h3 className='header'>
        <span className='title'>{ item.name }</span>
        <small className='date'>{ item.duration || item.date }</small>
      </h3>
      { item.tasks != null && (
        <ul className='tasks'>
          { item.tasks.map((task, i) => (
            <li className='task' key={i}>
              <p className='name'>{ task.name }</p>
            </li>
          )) }
        </ul>
      ) }
    </div>
  );
}

export default function History({ list }) {
  return (
    <ol className='history-component'>
      { list.map((item, i) => (
        <li key={i}>
          <HistoryEntry item={item} />
        </li>
      )) }
    </ol>
  );
}

History.propTypes = {
  list: PropTypes.array,
};
