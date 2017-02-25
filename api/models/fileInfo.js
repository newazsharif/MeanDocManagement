var mongoose = require('mongoose');

var fileSchema = new mongoose.Schema({
	name : String,
	filePath : String
})

mongoose.model('fileInfo',fileSchema);