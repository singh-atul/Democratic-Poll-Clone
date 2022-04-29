const Elections = require("../models/election.model");


exports.createElection = async (req, res) =>  {
    const newElection = new Elections({
        name : req.body.name,
        organizer : req.body.organizer
      });
      try{
        const election = await Elections.create(newElection);
        if(election){
          res.status(201).send(election);
        }
      }
      catch(err){
        res.status(500).send({"message":"Failed to create election"}); 
      }


}