var grid = require('selenium-grid-status');
var express = require('express');
var app = express();

app.get('/getnodesnumber/server/:server/port/:port', function (req, res) {
   grid.available({
    host: req.params.server,
    port: req.params.port,
	}, function(err, status) {
	    if (err) {
	        console.log('Error', err);
	        res.status(400).send(err);

	    }else{
	    	console.log(status.length);
	    	res.status(200).send(""+status.length)

	    }
	    
	});
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Selenium Nodes Calculator listening at http://%s:%s", host, port)

})
