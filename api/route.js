var express = require('express');
var router = express.Router();

var fileCtrl = require('./controllers/fileCtrl.js');

router
	.route('/fileUpload')
	.post(fileCtrl.fileUpload);

module.exports = router;