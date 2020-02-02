const axios = require('axios');
const _connectService = (serviceConfig) => {
  const baseURL = `http://${serviceConfig.serviceHost}:${serviceConfig.servicePort}`;
  const request = axios.create({
    baseURL
  })
  return {
    request
  };
};

const serviceConnector = (serviceConfig) => {
  return _connectService(serviceConfig);
};

module.exports = serviceConnector;