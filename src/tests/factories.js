const { Factory } = require('rosie');
const keymirror = require('keymirror');
const { AUTH_TYPE_KEYS } = require('../constants');

const factoryNames = keymirror({
  authObject: null,
  authItem: null,
});

Factory.define(factoryNames.authItem).attrs({
  type: AUTH_TYPE_KEYS.string,
  description: 'A secret',
});

Factory.define(factoryNames.authObject).attrs({
  secretString: Factory.build(factoryNames.authItem),
  secretNumber: Factory.build(factoryNames.authItem, {
    type: AUTH_TYPE_KEYS.number,
  }),
  secretToggle: Factory.build(factoryNames.authItem, {
    type: AUTH_TYPE_KEYS.bool,
  }),
});

module.exports = { Factory, factoryNames };
