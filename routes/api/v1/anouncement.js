const express = require("express");
const router = express.Router();
const anouncementController = require("../../../controllers/api/v1/anouncement");

// GET /api/vi/users

router.get("/:houseId",anouncementController.getAnnouncement);


// POST /api/vi/users

router.post("/", anouncementController.createAnouncement);

// PUT /api/vi/users

router.post("/", anouncementController.updateAnouncement);


// DELETE /api/vi/users

router.delete("/:id", anouncementController.deleteAnouncement);

module.exports = router;