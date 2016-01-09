var cheerio = require('cheerio'),
	express = require('express'),
	request = require('request')
	app = express();

app.get('/', function (req, res) {
    try {
        console.log("hello from the other side");
    } 
    catch (e) {
            console.log(e);
    }
});

var server = app.listen(process.env.PORT ||5000, function () {
	var host = server.address().address;
  	var port = server.address().port;

  console.log('I am alive!!!!!!!!!! and listening at http://%s:%s', host, port);
});