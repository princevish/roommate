require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./config/config");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const path = require("path");

//chat code
//const port2 = process.env.PORT2;
var http = require('http').createServer(app);
const PORT = 5000;
var io = require('socket.io')(http);


http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});
let user =[]
io.on('connection', (socket) => { 

socket.broadcast.emit('online', user)  
socket.on('join',(data)=>{
  
    if (data){
      user.push({
        "id": socket.id,
        "user": data.to
    })
      socket.join(data.to)
      socket.broadcast.emit('online', user)
  }
  })

socket.on('sendmsg',(data)=>{
    if (data.to){
        io.to(data.to).emit('recivemsg', data)
    }
    })

    socket.on("disconnect", function(){
      for (let x in user) {
        if(user[x].id == socket.id){
            
            user.splice(x,  1);
        }}  
        socket.broadcast.emit('online', user)
        
    });  
});
//chat code end
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use(compression({ level: 6 }));

// multer errors
app.use(function (err, req, res, next) {
  res.status(500).json({ err: err });
});
app.use(express.static("views"));
app.use("/upload", express.static("upload"));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  next();
});
app.use("/api", require("./routes"));
app.get('*',(req,res)=>{
 res.sendFile(path.resolve(__dirname, "views", "index.html"));
})

const port = process.env.PORT;
const ip = process.env.IP || '0.0.0.0';
app.listen(port,ip, () =>
  console.log(`Example app listening on port port! ${port}`)
);
