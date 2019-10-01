import axios from "axios";
import cheerio from "cheerio";

/**
 * Execute a watcher with the notify-watcher/core libs provided
 * @param watcher Watcher to be executed
 * @param {Object} options Options to pass to the watcher
 */
function executeWatcher({ watcher, ...options }) {
  return watcher({
    ...options,
    libs: {
      axios,
      cheerio
    }
  });
}

module.exports = executeWatcher;
