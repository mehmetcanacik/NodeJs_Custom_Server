const getExpress = require('express');
const userRouter = require('./core/routeManager/userRouteManager');
const myApp = getExpress();
myApp.use(getExpress.json());
myApp.use(getExpress.urlencoded({
    extended: true
}));

myApp.use('/getApi/Users', userRouter);


myApp.listen(3000, () => {
    console.log("Server Get Up with 3000")
});