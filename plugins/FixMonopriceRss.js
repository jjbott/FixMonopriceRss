var rest = require('node-rest-client');

var init = function(router) {

	router.get('/monoprice/rss.xml', function(req, res) {

		var client = new rest.Client();

		client.get("http://www.monoprice.com/products/rssdailydeal/rss.asp", function(data, response){
			res.set('Content-Type', 'application/rss+xml');
			res.send(data.split('<script')[0]);
		 });

	});

	console.log('Ready to return fixed monoprice rss feeds at /monoprice/rss.xml');
}

module.exports.init = init;