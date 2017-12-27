import generate from './generate';
import store from './store';

export default async function metagen(site, src, dest) {
  let metadata = await generate(site, src);
  let files = { main: metadata };
  await store(files, dest);
  return { metadata, files };
}
