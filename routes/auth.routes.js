const authController = require('../controllers/auth.controller');

module.exports = function (app) {
    app.post("/dpc/api/v1/authenticate", authController.signin);

}

