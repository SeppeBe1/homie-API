const Houserule = require("../../../models/HouseRules");

function getHouseRule(req, res) {
  const { houseId } = req.params;
  Houserule.find({ houseId: houseId })
    .then((results) => {
      if (results.length === 0) {
        res.status(404).json({ status: "Houserules not found" });
      } else {
        res.json({
          status: "success",
          result: results.map((result) => ({
            description: result.description,
            houseId: result.houseId,
          })),
        });
      }
    })
    .catch((err) =>
      res.status(500).json({
        status: "error",
        message: err,
      })
    );
}

const createHouseRule = async (req, res, next) => {
  const description = req.body.description;
  const houseId = req.body.houseId;

  const houserule = new Houserule({
    description: description,
    houseId: houseId,
  });

  try {
    const result = await houserule.save();
    console.log(result);

    res.json({
      status: "success",
      result: result,
      data: {
        description: result.description,
        houseId: result.houseId,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
};

function updateHouseRule(req, res) {
  const { description, houseId } = req.params;
  const newDescription = req.body.description;

  Houserule.findOneAndUpdate(
    { description: description, houseId: houseId },
    { description: newDescription }
  )
    .then((result) => {
      if (!result) {
        res.status(404).json({
          status: "failed",
          status: "does not exist",
        });
      } else {
        res.json({
          status: "succes",
          status: result,
        });
      }
    })
    .catch((error) =>
      res.status(500).json({
        status: "failed",
        result: error,
      })
    );
}

function deleteHouseRule(req, res) {
  const { description, houseId } = req.params;

  Houserule.findOneAndDelete({ description: description, houseId: houseId })
    .then((deleteHouseRule) => {
      if (!deleteHouseRule) {
        res.status(404).json({
          status: "failed",
          status: "does not exist",
        });
      } else {
        res.json({
          status: "succes",
        });
      }
    })
    .catch((error) =>
      res.status(500).json({
        status: "failed",
        result: error,
      })
    );
}

module.exports.getHouseRule = getHouseRule;
module.exports.createHouseRule = createHouseRule;
module.exports.updateHouseRule = updateHouseRule;
module.exports.deleteHouseRule = deleteHouseRule;
