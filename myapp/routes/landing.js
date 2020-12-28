var express = require('express');
var router = express.Router();

/* GET home page. */

let landing= require('../controller/landing')

router.get('/', landing.getlanding);

router.post('/',landing.submit_lead)

module.exports = router;
