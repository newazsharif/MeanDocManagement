var multer = require('multer');
var mongoose = require('mongoose');
var fileInfo = mongoose.model('fileInfo');


var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
        	
            cb(null, './uploads/')
        },
        filename: function (req, file, cb) {
        	
            var datetimestamp = Date.now();
            cb(null, file.originalname)
        }
    });
var upload = multer({storage : storage}).single('file');

 module.exports.fileUpload = function(req,res)
 {
 	
 	upload(req,res,function(err,result)
 	{
 		if (err) {
 			console.log(err)
 		}
 		else{
 			
 			req.body.fields.filePath = req.file.filename;
 			console.log(req.body.fields);
 			var _fileInfo = new fileInfo(req.body.fields)

 			_fileInfo.save(function(err,db)
 			{
 				if (err) {
 					res.status(400).json(err)
 				}
 				else
 				{
 					console.log('data saved')
 					res.status(200).json('saved successfully')
 				}
 			})
 			//res.status(200).json('uploaded successfully');
 		}
 	})
 }