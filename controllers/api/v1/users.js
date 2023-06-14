const User = require("../../../models/User")

function getUser(req, res) {
    const  firstName  = "Seppe";
  
    User.find({ firstName })
      .then(user => {
        if (!user) {
          res.status(404).json({ error: 'User not found' });
        } else {
          res.json(user);
        }
      })
      .catch(err => res.status(500).json(err));
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
                "phonenumber": result.phonenumber,
                "houseId": result.houseId,
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
  const {email, phonenumber} = req.body;

  User.findByIdAndUpdate(id, { houseId: req.body.houseId, email, phonenumber }, { new: true })
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

