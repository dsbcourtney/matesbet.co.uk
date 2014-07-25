// web.js
var express = require("express");
var logfmt = require("logfmt");
var jade = require("jade");
var app = express();

var config = {
	assets_path:'/assets',
	site_name:'Mates Bet'
}

app.set('views', __dirname + '/assets/jade');
app.set('view engine', 'jade');

app.use(logfmt.requestLogger());
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
	res.render('index', {title:'Home',config:config});
  //res.send('Hello World!');
  //res.send(__dirname);
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});