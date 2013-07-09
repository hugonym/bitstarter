var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  buf = new Buffer(256);
  fs.readFileSync('./index.html', 'utf8', function(err, data) {
    if (err) len = buf.write(err);
    len = buf.write(data);
  });
  
  response.send(buf.toString('utf8', 0, len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
