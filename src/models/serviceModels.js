const { DatabaseError } = require('../utils');

class ServiceModel {
  constructor(opts) {
    Object.assign(this, opts);
  }

  request() {
    return this.serviceConnector.request;
  }
}

module.exports = ServiceModel;