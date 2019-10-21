const { Factory } = require('rosie');
const keymirror = require('keymirror');
const {
  constants: { AUTH_TYPE_KEYS },
} = require('../constants');

const factoryNames = keymirror({
  authObject: null,
});

Factory.define(factoryNames.authObject).attrs({
  secretString: {
    type: AUTH_TYPE_KEYS.string,
    description: 'A secret string',
  },
  secretNumber: {
    type: AUTH_TYPE_KEYS.number,
    description: 'A secret number',
  },
  secretToggle: {
    type: AUTH_TYPE_KEYS.bool,
    description: 'A secret toggle',
  },
});

module.exports = { Factory, factoryNames };
