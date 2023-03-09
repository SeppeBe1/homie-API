const express = require("express");
const router = express.Router();
const taskController = require("../../../../controllers/api/v1/anouncements/task");

// GET /api/vi/users

router.get("/", taskController.getTask);


// POST /api/vi/users

router.post("/", taskController.createTask);

// DELETE /api/vi/users

router.delete("/:id", taskController.deleteTask);

module.exports = router;