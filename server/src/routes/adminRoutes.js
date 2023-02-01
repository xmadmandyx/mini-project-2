const express = require("express");
const { AdminController } = require("../controllers/admin.controllers");
const router = express.Router();

router.get("/", AdminController.getAdmin);

module.exports = router;
