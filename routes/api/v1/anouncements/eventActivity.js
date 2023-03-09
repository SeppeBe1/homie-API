const express = require("express");
const router = express.Router();
const eventController = require("../../../../controllers/api/v1/anouncements/eventActivity");

// GET /api/vi/users

router.get("/",eventController.getEvent);


// POST /api/vi/users

router.post("/", eventController.createEvent);

// DELETE /api/vi/users

router.delete("/:id", eventController.deleteEvent);

module.exports = router;