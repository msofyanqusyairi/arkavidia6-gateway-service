const { servicesConnector: connector } = require('../connectors');
const { ServiceModel } = require('../models');

const createServiceMiddleware = (app, serviceConfig) => {
  serviceConnector = connector(serviceConfig);
  return (req, res, next) => {
    res.locals[serviceConfig.serviceName] = new ServiceModel({ serviceConnector, serviceConfig });
    next();
  };
};

module.exports = createServiceMiddleware;
