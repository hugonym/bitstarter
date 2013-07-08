var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  buf = new Buffer(256);
  fs.readFileSync('./index.html', 'ascii', function(err, data) {
    if (err) throw err;
    console.log(data);
    buf.write(data, 'ascii');

  });
  
  console.log('Hello');
  console.log('buf.toString('ascii'));

  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
