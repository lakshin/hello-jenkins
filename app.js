var express = require('express');
var fs = require('fs');

var app = express();

app.get('/', function(req, res) {
	res.send('hello world');
});

var server = app.listen(process.env.PORT || 5000);
console.log('App started on port 5000');
module.exports = app;

var fileData = '<?xml version="1.0" encoding="UTF-8"?>'+
'<testsuites name="Mocha Tests" timestamp="2015-09-15T08:59:26" time="0.032" tests="1" failures="1">'+
  '<testsuite name="GET /" timestamp="2015-09-15T08:59:26" tests="1" failures="1" time="0.032">'+
    '<testcase name="GET / respond with hello world" time="0.032" className="respond with hello world">'+
      '<failure>expected &apos;hello world&apos; response body, got &apos;hello Testing&apos;</failure>'+
    '</testcase>'+
  '</testsuite>'+
'</testsuites>';

//file write
fs.writeFile('test.xml', fileData, function (err) {
  if (err) return console.log(err);
  console.log('Test report generated');
});

//close connection
setTimeout(function() {
	console.log("yes");
	server.close();
		
},1000*10);