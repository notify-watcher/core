/* eslint-disable no-console */
const { TIMEFRAMES_AND_REQUIRED_KEYS } = require('../constants');

const defaultOptions = {
  verbose: false,
};

function validateTimeframe(timeframe, watcherName, options = {}) {
  const { verbose } = {
    ...defaultOptions,
    ...options,
  };
  if (!timeframe) {
    if (verbose)
      console.warn(`WARN: No timeframe config for watcher ${watcherName}`);
    return false;
  }
  const { type, ...rest } = timeframe;
  const requiredKeys = TIMEFRAMES_AND_REQUIRED_KEYS[type];
  if (!requiredKeys) {
    if (verbose)
      console.warn(
        `WARN: Invalid timeframe type ${type} for watcher ${watcherName}`,
      );
    return false;
  }
  const timeframeKeys = Object.keys(rest);
  const missingKeys = requiredKeys.filter(key => !timeframeKeys.includes(key));
  if (missingKeys.length > 0) {
    if (verbose)
      console.warn(
        `WARN: Missing keys ${missingKeys} for timeframe ${type} for watcher ${watcherName}`,
      );
    return false;
  }
  return true;
}

module.exports = validateTimeframe;
