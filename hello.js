#!/usr/bin/env node
var fs = require('fs');
var outfile = "yello.txt";
var out = "Modify this script to write out something different.\n";
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
var buf = new Buffer(256);
len = buf.write("helllllllo");
console.log(len + " bytes: " + buf.toString('utf8', 0, len));

buf = new Buffer(256);

var content;
var content = fs.readFileSync('./index.html', 'utf8');
console.log('content='+content);
len = buf.write(content);
console.log('wrote ' + buf.toString('utf8', 0, len));


