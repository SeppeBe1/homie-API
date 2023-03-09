const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName: String,
    lastName: String,
});

const User = mongoose.model("User", userSchema);

const getUser = (req,res)=> {
    res.json({
        "status":"succes",
        "data":{
            "user":[]
        }
    });
}

const createUser = (req,res)=> {

    let user = new User();
    user.firstName = "Seppe";
    user.lastName = "Bellens";
    user.save((err, doc) =>{
        if(!err){
            res.json({
                "status":"succes",
                "data":{
                    "user": doc
                }
            });
        }
    })
}

module.exports.getUser = getUser;
module.exports.createUser = createUser;

