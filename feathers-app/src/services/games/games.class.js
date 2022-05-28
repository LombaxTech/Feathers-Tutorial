const { Service } = require("feathers-nedb");

exports.Games = class Games extends Service {
  async create(data, params) {
    data.createdAt = new Date();

    return super.create(data, params);
  }
};
