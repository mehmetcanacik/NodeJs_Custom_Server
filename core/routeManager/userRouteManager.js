const baseRouter = require('express').Router();
const users = require('../base/appUsers');
baseRouter.get('/', (getReq, getRes) => {
    getRes.send(users);
});

baseRouter.get('/:userId', (getReq, getRes) => {

    let tempResult = (users.find((user) => user.userId == getReq.params.userId));
    console.log(tempResult);
    if (tempResult !=undefined) {
        return getRes.json(tempResult);
    }
    return getRes.json({
        userId: 0,
        description: "User Not Found!"
    })
});

module.exports = baseRouter;