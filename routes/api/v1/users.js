const express = require("express");
const router = express.Router();
const userController = require("../../../controllers/api/v1/users");

// GET /api/vi/users

router.get("/",userController.getUser);


// POST /api/vi/users

router.post("/", userController.createUser);

module.exports = router;