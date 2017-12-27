import yargs from 'yargs';
import yaml from 'js-yaml';
import fs from 'fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import App from './component/App';
import Html from './component/Html';

// Simple frontend for testing. Should be changed soon.

yargs.alias('watch', 'w');
yargs.alias('output', 'o');

const argv = yargs.argv;

argv.output = argv.output || argv._[0].replace(/.ya?ml$/i, '.html');

console.log(argv);

function bake() {
  // Read document
  const document = yaml.safeLoad(fs.readFileSync(argv._[0], 'utf-8'));
  fs.writeFileSync(argv.output, renderToStaticMarkup(
    <Html>
      <App document={document} />
    </Html>
  ), 'utf-8');
  console.log('baked!');
}

bake();

if (argv.watch) {
  let watcher = fs.watch(argv._[0]);
  watcher.on('change', bake);
}
