const User = require('../../../models/User');
const passport = require('../../../passport/passport'); 
const jwt = require('jsonwebtoken');
const config = require('config');

const signup = async (req, res, next) => {

    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let password = req.body.password;
    let houseId = "";

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.json({
        status: "error",
        message: "Email already exists."
      });
    }


    const user = new User({
        firstname: firstname,
        lastname: lastname,
        email: email,
        houseId : houseId
    });

    await user.setPassword(password);
    await user.save().then(result => {
        console.log(result);

        let token = jwt.sign({
            uid: result._id,
            email: result.email,
        }, config.get('jwt.secret'));

        res.json({
            "status":"succes",
            "data": {
                "userId": result._id,
                "firstname": firstname,
                "lastname": lastname,
                "email": result.email,
                "token": token,
                "houseId": houseId
            }
        });
    }).catch(error => {
        res.json({
            "status":"error",
            "message":error,
        });
    }); 
};

const login = async (req, res, next) => {
    const  user  = await User.authenticate()(req.body.email, req.body.password).then(result => {
        if(!result.user){
            return res.json({
                "status": "failed",
                "message": "login failed"
            })
        }
        let token =jwt.sign({
            uid: result.user._id,
            email: result.user.email,
        }, config.get('jwt.secret'));

        return res.json({
            "status":"succes",
            "data":{
                "userId": result.user._id,
                "token": token,
                "houseId": result.user.houseId,
            }
        });

    }).catch(error => {
        res.json({
            "status":"error",
            "message":error,
        });
    }); 
};

module.exports.signup = signup;
module.exports.login = login;