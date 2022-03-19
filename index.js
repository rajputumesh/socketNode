const express = require('express');
const app = express();
const server = require('http').createServer(app);
var io = require("socket.io")(server, {cors: {origin: "*"}});

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  res.render('index');
});

server.listen(3000, ()=>{
  console.log("server connect port 3000.");
});
io.on('connection', (socket) => {
  socket.on("livechat",function(data){
    console.log(data);
    io.sockets.emit("livechat",data);
  });
});
