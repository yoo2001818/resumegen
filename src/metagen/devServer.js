import generate from './generate';
import fs from 'fs';
// import watch from 'watch';

export default function server(site, src) {
  let metadata = {};
  let data = {};
  async function regenerate() {
    console.log('Rebuilding...');
    metadata = await generate(site, src);
    data = { main: metadata };
  }
  fs.watch(src, regenerate);
  regenerate();

  // Serve on-memory
  let output = (req, res, next) => {
    let { path, method } = req;
    if (method !== 'GET') return next();
    let match = /\/(.+)\.json$/.exec(path);
    if (match == null) return next();
    let url = match[1];
    if (data[url] != null) res.json(data[url]);
    else next();
  };
  output.getMetadata = () => metadata;
  return output;
}
