const express = require('express');
const mongodb = require('mongodb');
const {
  services,
  http
} = require('../../config');
const { servicesMiddleware } = require('../middlewares');
const routes = require('../routes');
const { errorHandler } = require('../utils');

const { msProfile: msProfileConfig, msAuth: msAuthConfig } = services

const app = express();

// create service
const msProfileService = servicesMiddleware(app, msProfileConfig);
const msAuthService = servicesMiddleware(app, msAuthConfig);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//service Initialization
app.use(msProfileService);
app.use(msAuthService);

//router initialization
routes(app);

//error handler
app.use(errorHandler);

app.listen(http.httpPort, () => console.log(`app running at http://localhost:${http.httpPort}`));