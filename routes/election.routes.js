const electionController = require('../controllers/election.controller');
const  authJwt = require("../middlewares/authjwt");

module.exports = function (app) {
    app.post("/dpc/api/v1/createElection",[authJwt.verifyToken, authJwt.isAdmin],electionController.createElection);
    app.get("/dpc/api/v1/getElection",electionController.getElection);

}