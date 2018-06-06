var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = 3000;

app.use(express.static('../Client'));
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '../Client/index.html'));
});
http.listen(port, function(){
	  console.log('listening on *:' + port);
});
