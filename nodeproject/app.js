var express = require('express');
var app = express();

var port = process.env.PORT;

app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('bower_components'));


app.get('/', function(req, res) {
    res.send('Aloha world!');
});

app.get('/routing', function(req, res) {
    res.send('Aloha routing!');
});

app.listen(port, function(err) {
    console.log('The server is running on port: ' + port);
});