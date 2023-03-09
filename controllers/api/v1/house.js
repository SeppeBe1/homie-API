const House = require("../../../models/House")

function getHouse(req, res) {
    House.find()
      .then(house => {
        if (!house) {
          res.status(404).json({ error: 'house not found' });
        } else {
          res.json(house);
        }
      })
      .catch(err => res.status(500).json(err));
  }

function createHouse(req, res) {
  const houseName = "Casa Seppos";
  const city = "Turnhout";
  const postalcode = 2300;
  const street = "Stationsstraat";
  const streetNumber = "420";
  const profilePic = "";
  
  const newHouse = new House({
    houseName,
    city,
    postalcode,
    street,
    streetNumber,
    profilePic
  });

  newHouse.save()
    .then(house => res.json(house))
    .catch(err => res.status(500).json(err));
}


function updateHouse(req, res) {
    const  {id}  = req.params;
  
    House.findByIdAndUpdate(id,  {houseName: "Casa homies"}  , { new: true })
      .then(updateHouse => {
        if (!updateHouse) {
          res.status(404).json({ error: 'house not found' });
        } else {
          res.json(updateHouse);
        }
      })
      .catch(err => res.status(500).json(err));
  }

  function deleteHouse(req, res) {
    const { id } = req.params;
  
    House.findByIdAndDelete(id)
      .then(deleteHouse => {
        if (!deleteHouse) {
          res.status(404).json({ error: 'User not found' });
        } else {
          res.json(deleteHouse);
        }
      })
      .catch(err => res.status(500).json(err));
  }


module.exports.getHouse = getHouse;
module.exports.createHouse = createHouse;
module.exports.updateHouse = updateHouse;
module.exports.deleteHouse = deleteHouse;

