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

function createUser(req, res) {
  const firstName = "Seppe";
  const lastName = "Bellens"
  const newUser = new User({
    firstName,
    lastName,
  });

  newUser.save()
    .then(user => res.json(user))
    .catch(err => res.status(500).json(err));
}


module.exports.getUser = getUser;
module.exports.createUser = createUser;

