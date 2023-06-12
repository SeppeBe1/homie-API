const Houserule = require("../../../models/Houserules")

function getHouseRule(req, res) {
  
    Houserule.find({ })
      .then(houserule => {
        if (!houserule) {
          res.status(404).json({ error: 'houserule not found' });
        } else {
          res.json(houserule);
        }
      })
      .catch(err => res.status(500).json(err));
  }
  

  const createHouseRule = async (req, res, next) => {
    const description = req.body.description;
    const houseId = req.body.houseId;
  
    const houserule = new Houserule({
      description: description,
      houseId: houseId,

    });
  
    await houserule.save().then(result => {
        console.log(result);
  
        res.json({
            "status":"succes",
            "result": result,
            "data": {
                "description": result.description,
                "houseId": result.houseId,
            }
        });
    }).catch(error => {
        res.json({
            "status":"error",
            "message":error,
        });
    }); 
  };


  function updateHouseRule(req, res) {
    const { description, houseId } = req.params;
    const newDescription = req.body.description;
  
    Houserule.findOneAndUpdate({ description: description, houseId: houseId },{ description: newDescription})
      .then(result => {
        if (!result) {
          res.status(404).json({ 
            "status":"failed",
            "status":"does not exist",

          });
        } else {
          res.json({
            "status":"succes",
            "status":result,
          });
        }
      })
      .catch(error => res.status(500).json({ 
        "status":"failed",
        "result": error,
      }));
  }

  function deleteHouseRule(req, res) {
    const { description, houseId } = req.params;
  
    Houserule.findOneAndDelete({ description: description, houseId: houseId })
      .then(deleteHouseRule => {
        if (!deleteHouseRule) {
          res.status(404).json({ 
            "status":"failed",
            "status":"does not exist",

          });
        } else {
          res.json({
            "status":"succes",
          });
        }
      })
      .catch(error => res.status(500).json({ 
        "status":"failed",
        "result": error,
      }));
  }


module.exports.getHouseRule = getHouseRule;
module.exports.createHouseRule = createHouseRule;
module.exports.updateHouseRule = updateHouseRule;
module.exports.deleteHouseRule = deleteHouseRule;

