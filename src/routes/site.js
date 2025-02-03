var express = require('express');
var router = express.Router();

const SiteController = require('../app/controllers/SiteController');

router.get("/:slug",SiteController.search);
router.get("/",SiteController.index);

module.exports = router;