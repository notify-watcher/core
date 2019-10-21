/* eslint-disable no-console */

const defaultOptions = {
  verbose: true,
};

/**
 * Validate that all the libs required by a watcher are
 * included in the current watcher executor
 * @param {Object} executor A @notify-watcher/executor instance
 * @param {Array} libs The libs of the watcher being validated
 * @param {String} watcherName The name of the watcher being validated
 * @param {Object} options Options for running the validation
 */
function validateLibs(executor, libs, watcherName, options = {}) {
  const { verbose } = { ...defaultOptions, ...options };
  const missingLibs = [];
  for (let i = 0; i < libs.length; i += 1) {
    const lib = libs[i];
    if (!executor.hasLib(lib)) missingLibs.push(lib);
  }
  if (missingLibs.length > 0) {
    if (verbose)
      console.warn(`WARN: Missing libs ${libs} for watcher ${watcherName}`);
    return false;
  }
  return true;
}

module.exports = validateLibs;
