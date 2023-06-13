const House = require("../../../models/House")

function getHouses(req, res) {
    House.find()
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
                "houseId": result._id,
                "housename": result.housename,
                "city": result.city,
                "postalcode": result.postalcode,
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


  function getHouseWithCode(req, res) {
    const { houseCode } = req.params;
    House.find({ houseCode: parseInt(houseCode) } )
      .then(result => {
        if (result == "") {
          res.status(404).json({ 
        "status":"failed",
        "result":result
       });
        } else {
          res.json({
            "status":"succes",
            "result": result,
        });
        }
      })
      .catch(err => res.status(500).json({
        "status":"failed",
      }));
  }

  function getSpecificHouse(req, res) {
    const { id } = req.params;
    House.findById(id)
      .then(result => {
        if (!result) {
          res.status(404).json({ 
        "status":"failed",
        "result":result
       });
        } else {
          res.json({
            "status":"succes",
            "result": result,
            "data": {
                "houseId": result._id,
                "housename": result.housename,
                "city": result.city,
                "postalcode": result.postalcode,
                "houseCode": result.houseCode,
  
            }
        });
        }
      })
      .catch(err => res.status(500).json({
        "status":"error",
        "message":err}));
  }

const createHouse = async (req, res, next) => {

  const housename = req.body.housename;
  const city = req.body.city;
  const postalcode = req.body.postalcode;
  const street = req.body.street;
  const streetNumber = req.body.streetNumber;
  const profilePic = req.body.profilePic;


  function generateCode(searchExistingCodes) {
    let code;
    let isUnique = false;

    // Generate a random 6-digit code and check its uniqueness
    while (!isUnique) {
      code = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
      isUnique = !searchExistingCodes.includes(code);
    }

    return code;
  }

  const existingHouseCodes = await House.find().distinct('houseCode');
  const houseCode = generateCode(existingHouseCodes);



  const house = new House({
    housename: housename,
    city: city,
    postalcode: postalcode,
    street : street,
    streetNumber : streetNumber,
    profilePic : profilePic,
    houseCode : houseCode
  });

  await house.save().then(result => {
      console.log(result);

      res.json({
          "status":"succes",
          "result": result,
          "data": {
              "houseId": result._id,
              "housename": result.housename,
              "city": result.city,
              "postalcode": result.postalcode,
              "houseCode": result.houseCode,

          }
      });
  }).catch(error => {
      res.json({
          "status":"error",
          "message":error,
      });
  }); 
};


function updateHouse(req, res) {
    const  {id}  = req.params;
  
    House.findByIdAndUpdate(id,  {housename: "Casa homies"}  , { new: true })
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


module.exports.getHouses = getHouses; getHouseWithCode
module.exports.getHouseWithCode = getHouseWithCode;
module.exports.getSpecificHouse = getSpecificHouse;
module.exports.createHouse = createHouse;
module.exports.updateHouse = updateHouse;
module.exports.deleteHouse = deleteHouse;

