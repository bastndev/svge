import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

import { icons, getIcon } from '../dist/index.js';

const names = Object.keys(icons);
assert.ok(names.length > 0, 'at least one icon is generated');
assert.ok(names.includes('github'), 'github icon is present');
assert.ok(names.includes('home-outline'), 'bottom-bar outline icon is present');
assert.ok(names.includes('home-solid'), 'bottom-bar solid icon is present');

const github = getIcon('github');
assert.equal(github.viewBox, '0 0 24 24');
assert.ok(github.paths.length > 0, 'github icon has path data');
assert.ok(
  !github.paths.some((d) => d === 'M0 0h24v24H0z'),
  'dead Tabler canvas-bounds path is stripped from generated data',
);

assert.equal(getIcon('home-outline').style, 'stroke');
assert.equal(getIcon('home-solid').style, 'fill');
assert.equal(getIcon('message-solid').fillRule, 'evenodd');

// ESM build
const require = createRequire(import.meta.url);

// CJS build must load and expose the same API.
const cjs = require('../dist/index.cjs');
assert.equal(typeof cjs.getIcon, 'function', 'CJS build exposes getIcon');
assert.equal(Object.keys(cjs.icons).length, names.length, 'CJS build exposes the same icon set');

console.log(`✅ smoke test passed (${names.length} icons)`);
