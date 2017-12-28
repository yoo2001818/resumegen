import React from 'react';
import { render } from 'react-dom';

import 'whatwg-fetch';

import App from './component/app';

// Since the application is ABSOLUTELY static - there is no other pages,
// etc, we can just download the metadata json and be done with it.

let state = window.__INITIAL_STATE__;

function rerender() {
  render((
    <App state={state} />
  ), document.getElementById('root'));
}

if (state == null) {
  fetch('/metadata/main.json')
    .then(res => {
      if (res.status == 200) return res.json();
      throw res;
    }).then(body => {
      state = body;
      rerender();
    }, error => {
      console.error(error);
      state = { error: true };
      rerender();
    });
}

