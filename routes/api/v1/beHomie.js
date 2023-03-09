const express = require("express");
const router = express.Router();
const beHomieController = require("../../../controllers/api/v1/beHomie");

// GET /api/vi/users

router.get("/",beHomieController.getBehomie);


// POST /api/vi/users

router.post("/", beHomieController.createBeHomie);


// DELETE /api/vi/users

router.delete("/:id", beHomieController.deleteBehomie);

module.exports = router;