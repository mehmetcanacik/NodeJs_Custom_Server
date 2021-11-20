const baseRouter = require('express').Router();
const users = require('../base/appUsers');
baseRouter.get('/', (getReq, getRes) => {
    getRes.send(users);
});

module.exports = baseRouter;