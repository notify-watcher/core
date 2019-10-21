#!/usr/bin/env node
/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');

const watcherPlaceholderPath = require.resolve('../watcher-placeholder.txt');

const [, , ...args] = process.argv;

const watcherName = args[0];

if (!watcherName) {
  console.error('You must provide a watcher name');
  console.error('>\tnew-watcher <watcher-name>');
  process.exit(1);
}

const watcherDirPath = path.resolve('.', `${watcherName}`);
const watcherPath = path.resolve(watcherDirPath, 'index.js');

if (fs.existsSync(watcherDirPath)) {
  console.error(`The folder ${watcherName} already exists`);
  process.exit(1);
}

fs.mkdirSync(watcherDirPath);
fs.copyFileSync(watcherPlaceholderPath, watcherPath);

console.log(`Created watcher ${watcherName} at ${watcherPath}`);
