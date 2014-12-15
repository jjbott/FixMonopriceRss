###This project is obsolete. As of early Decmber 2014, monoprice.com has given up on trying to make a valid rss feed. The endpoint at http://www.monoprice.com/products/rssdailydeal/rss.asp still returns something, but it is only a couple lines of invalid xml and Google Analytics JS.

FixMonopriceRss
===============

Monoprice's RSS feed is broken. The most obvious error is the inclusion of a Google Analytics script at the bottom. That makes it an invalid XML document, and causes many RSS readers to choke and die. Lets fix it!

## Installation

No npm package yet. Just download the repo, cd to its directory, and run `npm install` to download the dependencies.

## Basic Usage

Run `node server.js`. The fixed feed will be available at http://localhost:8080/monoprice/rss.xml.

The server port can be set by setting the PORT environment variable to the desired port number. The default is 8080.

## Advanced (?) Usage

If you're already running an express server, this functionality can be added to it modifying your core app as follows:
* Import the main js with `var monopriceRssFix = require('FixMonopriceRss.js');` 
* Calling the init function, passing the express router: `monopriceRssFix.init(router);`

See server.js for an example



