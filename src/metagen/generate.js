import fs from 'fs-promise';
import yaml from 'js-yaml';

// Actually, this whole code should be provided by end user
export default async function generate(site, src) {
  let data = yaml.safeLoad(await fs.readFile(src, 'utf-8'));
  return data;
}
