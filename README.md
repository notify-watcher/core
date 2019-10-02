# Notify watcher core

Utilities for running Notify watcher's watchers

## Usage

Run a watcher by using `execute`

```js
const { execute } = require('@notify-watcher/core');

// Replace with your watcher
const watcher = {};

// Provide required data to watcher
const options = {};

const watcherExecution = execute(watcher, options);
```
