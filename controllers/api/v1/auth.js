const User = require('../../../models/User');
const passport = require('../../../passport/passport'); 
const jwt = require('jsonwebtoken');
const config = require('config');

const signup = async (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

    const user = new User({
        username: username
    });

    await user.setPassword(password);
    await user.save().then(result => {
        console.log(result);
        let token = jwt.sign({
            uid: result._id,
            username: result.username,
        }, config.get('jwt.secret'));
        res.json({
            "status":"succes",
            "data": {
                "token": token,
                
            }
        });

    }).catch(error =>{
        res.json({
            "status":"error",
            "message":error,
        });
    });
};

const login = async (req, res, next) => {
    const  user  = await User.authenticate()(req.body.username, req.body.password).then(result => {
        if(!result.user){
            return res.json({
                "status": "failed",
                "message": "login failed"
            })

        }
        let token =jwt.sign({
            uid: result.user._id,
            username: result.user.username,
        }, config.get('jwt.secret'));

        res.json({
            "status":"succes",
            "data":{
                "user": result,
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