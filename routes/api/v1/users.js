const express = require("express");
const router = express.Router();
const userController = require("../../../controllers/api/v1/users");

// GET /api/vi/users

router.get("/",userController.getUser);


// POST /api/vi/users

router.post("/", userController.createUser);

// PUT /api/vi/users

router.put("/:id", userController.updateUser);

// DELETE /api/vi/users

router.delete("/:id", userController.deleteUser);

module.exports = router;