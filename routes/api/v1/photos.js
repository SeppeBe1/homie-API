const express = require("express");
const router = express.Router();
const photocontroller = require("../../../controllers/api/v1/photo");

// GET /api/vi/users

router.get("/",photocontroller.getAllPhotos);
router.get("/user/:userid",photocontroller.getPhotoUser);
router.get("/house/:houseid",photocontroller.getPhotoHouse);


// POST /api/vi/users

router.post("/", photocontroller.createPhoto);

// PUT /api/vi/users

router.post("/:id", photocontroller.changeLikes);


// DELETE /api/vi/users

router.delete("/:id", photocontroller.deletePhoto);

module.exports = router;