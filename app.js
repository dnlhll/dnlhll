var express = require('express')
var http = require('http')
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) { res.sendfile('index.html'); });

http.createServer(app).listen(app.get('port'), function()
{
  console.log('Express server listening on port ' + app.get('port'));
});
