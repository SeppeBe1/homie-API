const HouseRule = require("../../../models/HouseRules")

function getHouseRule(req, res) {
  
    HouseRule.find({ })
      .then(houseRule => {
        if (!houseRule) {
          res.status(404).json({ error: 'houseRule not found' });
        } else {
          res.json(houseRule);
        }
      })
      .catch(err => res.status(500).json(err));
  }

function createHouseRule(req, res) {
  const description = "Den afwas moet gebeuren na het eten.";
  const house_id = "1";

  
  const newHouseRule = new HouseRule({
    description,
    house_id,

  });

  newHouseRule.save()
    .then(houseRule => res.json(houseRule))
    .catch(err => res.status(500).json(err));
}


function updateHouseRule(req, res) {
    const  {id}  = req.params;
  
    HouseRule.findByIdAndUpdate(id,  {description: "Doe den afwas maar niet"}  , { new: true })
      .then(updateHouseRule => {
        if (!updateHouseRule) {
          res.status(404).json({ error: 'houseRule not found' });
        } else {
          res.json(updateHouseRule);
        }
      })
      .catch(err => res.status(500).json(err));
  }

  function delereHouseRule(req, res) {
    const { id } = req.params;
  
    HouseRule.findByIdAndDelete(id)
      .then(delereHouseRule => {
        if (!delereHouseRule) {
          res.status(404).json({ error: 'houseRule not found' });
        } else {
          res.json(delereHouseRule);
        }
      })
      .catch(err => res.status(500).json(err));
  }


module.exports.getHouseRule = getHouseRule;
module.exports.createHouseRule = createHouseRule;
module.exports.updateHouseRule = updateHouseRule;
module.exports.delereHouseRule = delereHouseRule;

