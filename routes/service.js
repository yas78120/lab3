var express = require('express');
var router = express.Router();
var ServicesController = require( "../controller/servicescontroller.js");
var services = new ServicesController();

router.get("/", services.index);
router.post("/test", services.test);
module.exports = router;
