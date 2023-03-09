const express = require("express");
const router = express.Router();
const normalAnouncementController = require("../../../../controllers/api/v1/anouncements/normalAnouncement");

// GET /api/vi/users

router.get("/",normalAnouncementController.getNormalAnouncement);


// POST /api/vi/users

router.post("/", normalAnouncementController.createNormalAnouncement);

// DELETE /api/vi/users

router.delete("/:id", normalAnouncementController.deleteNormalAnouncement);

module.exports = router;