require('dotenv').config();

const config = {
  secretKey: process.env.SECRET_KEY,
  db: {
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD
  },
  http: {
    httpPort: process.env.HTTP_PORT
  },
  services: {
    msAuth: {
      serviceName: process.env.MS_LOGIN_SERVICE_NAME,
      serviceHost: process.env.MS_LOGIN_SERVICE_HOST,
      servicePort: process.env.MS_LOGIN_SERVICE_PORT
    },
    msRegister: {
      serviceName: process.env.MS_REGISTER_SERVICE_NAME,
      serviceHost: process.env.MS_REGISTER_SERVICE_HOST,
      servicePort: process.env.MS_REGISTER_SERVICE_PORT
    },
    msProfile: {
      serviceName: process.env.MS_PROFILE_SERVICE_NAME,
      serviceHost: process.env.MS_PROFILE_SERVICE_HOST,
      servicePort: process.env.MS_PROFILE_SERVICE_PORT
    }
  }
  

};

module.exports = config;