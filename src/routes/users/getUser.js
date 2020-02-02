const express = require('express');
const { createHandler } = require("../../utils");
const { getUserHandler: handler } = require('../../handlers');

const router = express.Router();

router.get('/user-profile/:username', createHandler(handler));

module.exports = router;
