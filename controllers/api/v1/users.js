const User = require("../../../models/User")

function getUser(req, res) {
  User.find()
    .then(result => {
      if (!result) {
        res.status(404).json({ 
        "status":"failed",
        "result":result });
      } else {
        res.json({
          "status":"succes",
          "result": result,
          "data": {
              "_id": result._id,
              "firstname": result.firstname,
              "lastname": result.lastname,
              "email": result.email,
              "houseCode": result.houseCode,
          }
      });
      }
    })
    .catch(err => res.status(500).json({
      "status":"error",
      "message":err
    }));
}

  function getSpecificUser(req, res) {
    const { id } = req.params;
    User.findById(id)
      .then(result => {
        if (!result) {
          res.status(404).json({ 
        "status":"failed",
       });
        } else {
          res.json({
            "status":"succes",
            "data": {
                "userId": result._id,
                "firstname": result.firstname,
                "lastname": result.lastname,
                "email": result.email,
<<<<<<< HEAD
=======
                "phonenumber": result.phonenumber,
>>>>>>> 256c0e6ff37c914071c0c8ef5f5947bf3187c5ab
                "houseId": result.houseId,
                "profilePic": result.profilePic,
                "availability": result.availability,
                "emailPublic": result.emailPublic,
                "phonePublic": result.phonePublic,
            }
        });
        }
      })
      .catch(err => res.status(500).json({
        "status":"error",
        "message":err}));
  }

  function getUsersHouse(req, res) {
    const { houseId } = req.params;
    User.find({ houseId: houseId })
      .then(results => {
        if (results.length === 0) {
          res.status(404).json({ 
            "status": "failed"
          });
        } else {
          res.json({
            "status": "success",
            "result": results.map(result => ({
              "firstname": result.firstname,
              "lastname": result.lastname,
              "houseId": result.houseId,
              // Add other properties you want to include
            }))
          });
        }
      })
      .catch(err => res.status(500).json({
        "status": "error",
        "message": err
      }));
  }

function updateUser(req, res) {
  const { id } = req.params;
  const {email, phonenumber, emailPublic, phonePublic, profilePic, availability} = req.body;

<<<<<<< HEAD
  User.findByIdAndUpdate(id, { houseId: req.body.houseId, telNr: req.body.telNr }, { new: true })
=======
  
  User.findByIdAndUpdate(id, { houseId: req.body.houseId, email, emailPublic, phonenumber, phonePublic, profilePic: req.body.profilePic, availability }, { new: true })
>>>>>>> 256c0e6ff37c914071c0c8ef5f5947bf3187c5ab
    .then(result => {
      if (!result) {
        res.status(404).json({
          "status": "failed",
          "result": "User not found",
          "data": result
        });
      } else {
        res.json({
          "status": "success",
          "data": result
        });
      }
    })
    .catch(err => res.status(500).json({
      "status": "failed",
      "result": err.message,
    }));
}

  function deleteUser(req, res) {
    const { id } = req.params;
  
    User.findByIdAndDelete(id)
      .then(deletedUser => {
        if (!deletedUser) {
          res.status(404).json({ error: 'User not found' });
        } else {
          res.json(deletedUser);
        }
      })
      .catch(err => res.status(500).json(err));
  }


module.exports.getUser = getUser;
module.exports.getUsersHouse = getUsersHouse;
module.exports.getSpecificUser = getSpecificUser;
// module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;

