const express = require("express");
const router = express.Router();
const userController = require("../../../controllers/api/v1/houseRules");

// GET /api/vi/users

router.get("/",userController.getHouseRule);


// POST /api/vi/users

router.post("/", userController.createHouseRule);

// PUT /api/vi/users

router.put("/:id", userController.updateHouseRule);

// DELETE /api/vi/users

router.delete("/:id", userController.delereHouseRule);

module.exports = router;