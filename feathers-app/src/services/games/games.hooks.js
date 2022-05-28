const { authenticate } = require("@feathersjs/authentication").hooks;

const checkTitleExists = require('../../hooks/check-title-exists');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [checkTitleExists()],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
