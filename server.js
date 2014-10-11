var express = require('express'); 	
var morgan = require('morgan');
var app = express(); 	

var port = process.env.PORT || 8080; 	

var router = express.Router(); 

require("fs").readdirSync("./plugins").forEach(function(file) {
  	var plugin = require("./plugins/" + file);
  	if ( plugin.init && typeof(plugin.init) == "function") {
  		plugin.init(router);
  	}
});
app.use(morgan('combined'));
app.use('/', router);
app.listen(port);
console.log('Listening on ' + port);