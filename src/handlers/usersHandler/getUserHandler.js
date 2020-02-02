const { statusCode } = require('../../utils');

const getUserHandler = async (req, res) => {
  const {
    msProfile
  } = res.locals;


  const response = await msProfile.request().get('/user-profile/sofyanq');
  const userProfile = response.data;

  res.status(statusCode.CREATED).send({ userProfile });
};

module.exports = getUserHandler;
