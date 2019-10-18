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

module.exports = {
  TIMEFRAMES,
  TIMEFRAMES_AND_REQUIRED_KEYS,
};
