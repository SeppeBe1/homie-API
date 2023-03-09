const express = require("express");
const router = express.Router();
const userController = require("../../../controllers/api/v1/house");

// GET /api/vi/users

router.get("/",userController.getHouse);


// POST /api/vi/users

router.post("/", userController.createHouse);

// PUT /api/vi/users

router.put("/:id", userController.updateHouse);

// DELETE /api/vi/users

router.delete("/:id", userController.deleteHouse);

module.exports = router;