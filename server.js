const express = require('express');
const app = express();
const mongoose = require('mongoose');
//connection Mngodb sur mlab
const dbUrl = 'mongodb://ayechsalim:s22437182@ds135653.mlab.com:35653/mychat';
mongoose.connect(dbUrl,{useNewUrlParser: true}, (err) => { 
    console.log('mongodb connected',err);
 })
 //midelware
 const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
//definir le model
 const Message = mongoose.model('Message',{ name : String, message : String})
server = app.listen(8080, function(){
    console.log('server is running on port 8080')
});


//get messages
app.get('/messages', (req, res) => {
    Message.find({},(err, messages)=> {
      res.send(messages);
    })
  })
  //post messages
  app.post('/messages', (req, res) => {
    const message = new Message(req.body);
    message.save((err) =>{
      if(err)
        sendStatus(500);
      res.sendStatus(200);
    })
  })
const socket = require('socket.io');
io = socket(server);

io.on('connection', (socket) => {
    console.log("Client Successfully Connected");
    console.log(socket.id);

});
io.on('connection', (socket) => {
    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);

    })
  
});
let nsp = io.of('/private');
nsp.on('connection', function(socket){
  console.log('someone private connected');
});

nsp.on('connection', (socket) => {
  socket.on('SEND_MESSAGE', function(data){
      nsp.emit('RECEIVE_MESSAGE', data);

  })

});