/* eslint-disable no-console */
const { AUTH_KEYS, AUTH_TYPE_KEYS } = require('../constants');

const requiredItemKeys = Object.keys(AUTH_KEYS);
const validTypeKeys = Object.keys(AUTH_TYPE_KEYS);

const defaultOptions = {
  verbose: true,
};

function validateAuth(auth, watcherName, options = {}) {
  const { verbose } = { ...defaultOptions, ...options };
  if (!auth) return true;

  const invalidItems = [];
  const authItemsKeys = Object.keys(auth);
  if (authItemsKeys.length === 0) {
    if (verbose)
      console.warn(`WARN: Empty auth config for watcher ${watcherName}`);
    return false;
  }

  for (let i = 0; i < authItemsKeys.length; i += 1) {
    const authItemKey = authItemsKeys[i];
    const authItem = auth[authItemKey];

    const missingKeys = requiredItemKeys.filter(key => !authItem[key]);
    if (missingKeys.length > 0 && verbose)
      console.warn(
        `WARN: Missing auth item keys ${missingKeys} for item ${authItemKey} for watcher ${watcherName}`,
      );

    const invalidKeys = Object.keys(authItem).filter(key => !AUTH_KEYS[key]);
    if (invalidKeys.length > 0 && verbose)
      console.warn(
        `WARN: Invalid auth item keys ${invalidKeys} for item ${authItemKey} for watcher ${watcherName}`,
      );

    const authItemType = authItem[AUTH_KEYS.type];
    const invalidType = authItemType && !validTypeKeys.includes(authItemType);
    if (invalidType && verbose)
      console.warn(
        `WARN: Invalid auth item type ${authItemType} for item ${authItemKey} for watcher ${watcherName}`,
      );

    const description = authItemsKeys[AUTH_KEYS.description];
    const emptyDescription = description && description.length === 0;
    if (emptyDescription && verbose)
      console.warn(
        `WARN: Empty description for item ${authItemKey} for watcher ${watcherName}`,
      );

    const isInvalidItem =
      missingKeys.length > 0 ||
      invalidKeys.length > 0 ||
      invalidType ||
      emptyDescription;

    if (isInvalidItem) invalidItems.push(authItem);
  }

  if (invalidItems.length > 0) return false;

  return true;
}

module.exports = validateAuth;
