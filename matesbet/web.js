// web.js
var express = require("express");
var logfmt = require("logfmt");
var jade = require("jade");
var app = express();
//app.use(app.router);


//app.set('views', __dirname + '/assets/jade');
app.set('views', __dirname);
app.set('view_engine', 'jade');

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
	res.render('index', {title:'Home'});
  //res.send('Hello World!');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});