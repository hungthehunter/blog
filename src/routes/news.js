var express = require('express');
var router = express.Router();

const NewsController = require('../app/controllers/NewsController');

router.get("/:slug",NewsController.show);
router.get("/",NewsController.index);

module.exports = router;