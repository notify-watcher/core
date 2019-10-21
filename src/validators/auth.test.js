const { Factory, factoryNames } = require('../tests/factories');
const { AUTH_TYPE_KEYS } = require('../constants');
const originalValidateAuth = require('./auth');

function validateAuth(auth) {
  return originalValidateAuth(auth, 'testWatcherName', { verbose: false });
}

describe('validateAuth', () => {
  describe('when auth is undefined', () => {
    it('is valid', () => {
      expect(validateAuth(undefined)).toBeTruthy();
    });
  });

  describe('when auth is false', () => {
    it('is valid', () => {
      expect(validateAuth(false)).toBeTruthy();
    });
  });

  describe('when auth is empty', () => {
    it('is not valid', () => {
      expect(validateAuth({})).toBeFalsy();
    });
  });

  describe('when auth keys have type and description', () => {
    it('is valid', () => {
      const authObject = Factory.build(factoryNames.authObject);
      expect(validateAuth(authObject)).toBeTruthy();
    });
  });

  describe('when auth item does not have a description', () => {
    it('is not valid', () => {
      const authObject = Factory.build(factoryNames.authObject, {
        secret2: { type: AUTH_TYPE_KEYS.string },
      });
      expect(validateAuth(authObject)).toBeFalsy();
    });
  });

  describe('when auth item has an empty description', () => {
    it('is not valid', () => {
      const authObject = Factory.build(factoryNames.authObject, {
        secret2: Factory.build(factoryNames.authItem, { description: '' }),
      });
      expect(validateAuth(authObject)).toBeFalsy();
    });
  });

  describe('when auth item does not have a type', () => {
    it('is not valid', () => {
      const authObject = Factory.build(factoryNames.authObject, {
        secret2: { description: 'a secret' },
      });
      expect(validateAuth(authObject)).toBeFalsy();
    });
  });

  describe('when auth item has an invalid key', () => {
    it('is not valid', () => {
      const authObject = Factory.build(factoryNames.authObject, {
        secret2: Factory.build(factoryNames.authItem, {
          invalidKey: 'invalid',
        }),
      });
      expect(validateAuth(authObject)).toBeFalsy();
    });
  });
});
