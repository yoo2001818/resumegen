import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Summary from './summary';
import Section from './section';
import History from './history';

import '../style/page.scss';

export default function Page({ state }) {
  return (
    <div className='page-component'>
      <Header vcard={state.vcard} />
      <Summary>{ state.summary }</Summary>
      <Section title='학력' subtitle='Education'>
        <History list={state.education} />
      </Section>
      <Section title='업무경험' subtitle='Work Experience'>
        <History list={state.employment} />
      </Section>
      <Section title='수상경력' subtitle='Awards'>
        <History list={state.awards} />
      </Section>
      <Section title='프로젝트' subtitle='Projects'>
        <History list={state.projects} className='projects' />
      </Section>
    </div>
  );
}

Page.propTypes = {
  state: PropTypes.object,
};
