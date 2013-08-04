var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger())
            .use("/public", express.static(__dirname + "/public"));

app.get('/', function(request, response) {
  response.writeHead(200);
  buf = fs.readFileSync('index.html');
  response.write(buf.toString());
  response.end();
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
