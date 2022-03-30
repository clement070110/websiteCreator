const express = require('express');
const path = require('path');
var http = require('http');
const app = express();
const port = process.env.PORT || 8080;
var public = path.join(__dirname, 'public');
// sendFile will go here
app.get('/', function(req, res) {
		app.use(express.static(public));
    res.sendFile(path.join(public, 'index.html'));
});

app.listen(port);
console.log("starting server")