const User = require("../models/user.model");
var bcrypt = require("bcryptjs");
const config = require("../configs/auth.config");
var jwt = require("jsonwebtoken");



// Authenticate
exports.signin = async (req, res) =>  {
    //Fetch the user based on the userName
    //Validating the userName 
    const user = await User.findOne({ username:  req.body.username });
    if (user == null) {
        res.status(400).send({
            message: "Failed! UserName doesn't exist!"
        });
        return;
    }

    //Checkig if the password matches
    var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
    
    if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
    }
    var token = jwt.sign({ id: user.username }, config.secret, {
        expiresIn: 120 // 2 minutes
      });
    
      res.status(200).send({
        role : user.role,
        email: user.email,
        username : user.username,
        accessToken : token
      })

  }