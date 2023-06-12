const express = require("express");
const router = express.Router();
const houseruleController = require("../../../controllers/api/v1/houserules");

// GET /api/vi/users

router.get("/",houseruleController.getHouseRule);


// POST /api/vi/users

router.post("/", houseruleController.createHouseRule);

// PUT /api/vi/users

router.put("/:description/:houseId", houseruleController.updateHouseRule);

// DELETE /api/vi/users

router.delete("/:description/:houseId", houseruleController.deleteHouseRule);

module.exports = router;