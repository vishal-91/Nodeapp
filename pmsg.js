var express = require('express')
var app = express()
var http = require('http').Server(app)
var io  = require('socket.io')(http)

app.get('/', function(req, res){
  res.sendFile('/Users/vishal/Desktop/Project/pmsg.html')
})

io.on('connection', function(socket){
  console.log(socket.id)
  socket.on('chat message', function(id, msg){
    console.log(id)
    socket.broadcast.to(id).emit('chat message', msg)
  })
})

io.on('diconnect', function(socket){
  console.log("disconnected")
})


http.listen(3000)
