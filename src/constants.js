const keymirror = require('keymirror');

const ERRORS = keymirror({
  auth: null,
  other: null,
});

const TIMEFRAMES = keymirror({
  minute: null,
  hour: null,
  day: null,
});

const TIMEFRAMES_AND_REQUIRED_KEYS = {
  [TIMEFRAMES.minute]: [],
  [TIMEFRAMES.hour]: [],
  [TIMEFRAMES.day]: ['hour'],
};

const AUTH_KEYS = keymirror({
  type: null,
  description: null,
});

const AUTH_TYPE_KEYS = keymirror({
  string: null,
  bool: null,
  number: null,
});

const AUTH_TYPES = {
  [AUTH_TYPE_KEYS.string]: String,
  [AUTH_TYPE_KEYS.bool]: Boolean,
  [AUTH_TYPE_KEYS.number]: Number,
};

const CLIENT_KINDS = keymirror({
  telegram: null,
  email: null,
});

module.exports = {
  AUTH_KEYS,
  AUTH_TYPE_KEYS,
  AUTH_TYPES,
  CLIENT_KINDS,
  ERRORS,
  TIMEFRAMES_AND_REQUIRED_KEYS,
  TIMEFRAMES,
};
