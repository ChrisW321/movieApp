const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Soon to be movie List'))
var port = 8000;

// For now, since you're running this server on your local machine,
// we'll have it listen on the IP address 127.0.0.1, which is a
// special address that always refers to localhost.
var ip = '127.0.0.1';
console.log('Listening on http://' + ip + ':' + port);

app.listen(8000)