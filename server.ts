// import { Server } from "socket.io";

// const io = new Server({
//   /* options */
// });

// io.on("connection", (socket) => {
//   // ...
// });

// io.listen(3000);

const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", msg);
    // io.emit("chat message", "tesssssst");
  });
  // socket.on("disconnect", () => {
  //   console.log("user dusconnected");
  // });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
