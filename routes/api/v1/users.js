const express = require("express");
const router = express.Router();
const userController = require("../../../controllers/api/v1/users");
const authController = require("../../../controllers/api/v1/auth");
const config = require('config');
const passport = require('./../../../passport/passport');

// GET /api/vi/users

router.get("/",userController.getUser);
router.get("/:id",userController.getSpecificUser);
router.get("/house/:houseId",userController.getUsersHouse);



// POST /api/vi/users

// router.post("/", userController.createUser);

router.post("/signup", authController.signup);
router.post("/login", authController.login);

// PUT /api/vi/users

router.put("/:id", userController.updateUser);

// DELETE /api/vi/users

router.delete("/:id", userController.deleteUser);

module.exports = router;
