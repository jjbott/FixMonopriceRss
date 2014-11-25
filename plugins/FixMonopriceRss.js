var rest = require('node-rest-client');

var init = function(router) {

	router.get('/monoprice/rss.xml', function(req, res) {

		var client = new rest.Client();

		client.get("http://www.monoprice.com/products/rssdailydeal/rss.asp", function(data, response){
			res.set('Content-Type', 'application/rss+xml');
			var xml = data.split('<script')[0]; // Strip out google analytics js from the end
			xml = xml.replace(/<\/item>[\s\S]*<item>/g, '</item><item>'); // Get rid of the garbage between items
			res.send(xml);
		 });

	});

	console.log('Ready to return fixed monoprice rss feeds at /monoprice/rss.xml');
}

module.exports.init = init;