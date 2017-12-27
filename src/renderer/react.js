import React from 'react';
import Helmet from 'react-helmet';

import { renderToStaticMarkup } from 'react-dom/server';
import serialize from 'serialize-javascript';

import App from '../client/component/App';

export default function renderReact(link, metadata, files, publicPath,
  assetsByChunkName, footer
) {
  return new Promise((resolve, reject) => {
    let tree = (
      <App />
    );
    let result = renderToStaticMarkup(tree);
    let head = Helmet.rewind();
    // OK, then wrap the data into HTML
    let assets = assetsByChunkName.main;
    if (!Array.isArray(assets)) assets = [assets];
    let html = `<!doctype html>
<html>
  <head>
    ${head.title.toString()}
    ${head.meta.toString()}
    ${head.link.toString()}
    ${
      assets
      .filter(path => path.endsWith('.css'))
      .map(path => `<link rel="stylesheet" href="${publicPath + path}" />`)
      .join('')
    }
  </head>
  <body>
    <div id="root">
      ${result}
    </div>
    <script>
      window.__INITIAL_STATE__ = ${serialize(metadata)}
    </script>
    ${
      assets
      .filter(path => path.endsWith('.js'))
      .map(path => `<script src="${publicPath + path}"></script>`)
      .join('')
    }
    ${footer}
  </body>
</html>`;
    resolve(html);
  });
}
