
var express = require('express');

var app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

app.get('/', function (req, res) {
    console.log(req.body.message)
})

io.on('connection', function (socket) {
    console.log('Connected')
})

server.listen(3000)
