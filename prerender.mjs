// Build step: inject the server-rendered HTML into dist/index.html (see README).
import fs from 'node:fs';
import { render } from './dist-ssr/entry-server.js';

const file = 'dist/index.html';
const html = fs.readFileSync(file, 'utf8').replace('<div id="root"></div>', `<div id="root">${render()}</div>`);
fs.writeFileSync(file, html);
fs.writeFileSync('dist/404.html', html);
fs.rmSync('dist-ssr', { recursive: true, force: true });
console.log('Pre-rendered dist/index.html');
