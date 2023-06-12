const express = require("express");
const router = express.Router();
const houseController = require("../../../controllers/api/v1/house");

// GET /api/vi/users

router.get("/",houseController.getHouses);
router.get("/:id",houseController.getSpecificHouse);
router.get("/code/:houseCode",houseController.getHouseWithCode);


// POST /api/vi/users

router.post("/", houseController.createHouse);

// PUT /api/vi/users

router.put("/:id", houseController.updateHouse);

// DELETE /api/vi/users

router.delete("/:id", houseController.deleteHouse);

module.exports = router;