var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  s = fs.readFileSync('./index.html');
  response.send(s);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
