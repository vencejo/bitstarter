var fs = require('fs');
var express = require('express');

var dataFromIndex = null;

fs.readFile('index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
  dataFromIndex = data;
});

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(dataFromIndex);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
