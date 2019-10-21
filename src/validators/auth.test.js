const { Factory, factoryNames } = require('../tests/factories');
const validateAuth = require('./auth');

describe('test', () => {
  it('passes', () => {
    const authObject = Factory.build(factoryNames.authObject);
    expect(validateAuth(authObject)).toBeTruthy();
  });
});
