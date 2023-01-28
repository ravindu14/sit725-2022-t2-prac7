const connectSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("user connected");
    socket.on("disconnect", function () {
      console.log("user disconnected");
    });
    setInterval(() => {
      socket.emit("chat", parseInt(Math.random() * 10));
    }, 1000);
  });
};

module.exports = connectSocket;
