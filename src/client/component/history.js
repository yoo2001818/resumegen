import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Marked from './marked';
import TagList from './tagList';
import LinkList from './linkList';

import '../style/history.scss';

export function HistoryEntry({ item }) {
  return (
    <div className='history-entry-component'>
      <h3 className='header'>
        { item.url == null && item.repository == null ? (
          <span className='title'>{ item.name }</span>
        ) : (
          <a className='title' href={item.url || item.repository}>
            { item.name }
          </a>
        ) }
        <small className='date'>{ item.duration || item.date }</small>
        { item.project != null && (
          <small className='project'>{ item.project }</small>
        ) }
      </h3>
      <div className='content'>
        { item.description != null && (
          <Marked className='description'>{ item.description }</Marked>
        ) }
        { item.tasks != null && (
          <ul className='tasks'>
            { item.tasks.map((task, i) => (
              <li className='task' key={i}>
                <Marked className='name'>{ task.name }</Marked>
                { task.tags && (
                  <TagList tags={task.tags} />
                ) }
              </li>
            )) }
          </ul>
        ) }
        <LinkList item={item} />
        { item.category != null && (
          <div className='category'>
            { item.category.join(', ') }
          </div>
        ) }
        { item.stack != null && (
          <div className='stack'>
            <TagList tags={item.stack} />
          </div>
        ) }
      </div>
    </div>
  );
}

export default function History({ list, className }) {
  return (
    <ol className={classNames('history-component', className)}>
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
  className: PropTypes.string,
};
