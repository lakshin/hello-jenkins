var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.send('hello Testing');
});

app.listen(process.env.PORT || 5000);
console.log('App started on port 5000');
module.exports = app;