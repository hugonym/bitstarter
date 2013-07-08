var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  buf = new Buffer(256);
  len = buf.write("empty buffer");
  fs.readFileSync('./index.html', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
    len = buf.write(data);

  });
  
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
