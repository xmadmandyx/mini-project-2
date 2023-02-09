const express = require("express");
const { AdminController } = require("../controllers/admin.controllers");
const router = express.Router();

router.post("/", AdminController.createAdmin);

module.exports = router;
