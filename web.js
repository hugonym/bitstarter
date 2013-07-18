var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  buf = new Buffer(20000);
  var content = fs.readFileSync('./index.html', 'utf8');
  var len = buf.write(content);
  
  response.send(buf.toString('utf8', 0, len));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
