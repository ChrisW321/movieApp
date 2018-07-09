const express = require('express')
var mysql = require('mysql');
const controller = require('./dbServer.js')
const app = express()

var parser = require('body-parser');

// app.get('/', (req, res) => res.send())


app.use(express.static('/Users/chris/code/movieApp/movieApp'));

var port = 8000;
app.set('port', port);

app.use(parser.json());

app.get('/', function(req, res) {
    console.log('getted');
    res.end('GOT')
})

app.post('/', function(req, res) {
    console.log(req.body);
    res.send('posted');
});



// For now, since you're running this server on your local machine,
// we'll have it listen on the IP address 127.0.0.1, which is a
// special address that always refers to localhost.
var ip = '127.0.0.1';
console.log('Listening on http://' + ip + ':' + port);

app.listen(8000)

module.exports.app = app;


