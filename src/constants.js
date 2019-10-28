const keymirror = require('keymirror');

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

module.exports = {
  AUTH_KEYS,
  AUTH_TYPE_KEYS,
  AUTH_TYPES,
  TIMEFRAMES_AND_REQUIRED_KEYS,
  TIMEFRAMES,
};
