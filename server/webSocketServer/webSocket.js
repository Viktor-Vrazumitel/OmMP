const ws = require("ws");

const wss = new ws.Server(
  {
    port: 5001,
  },
  () => console.log(`Server vzletel 5000`)
);

wss.on("connection", function connection(ws) {
  ws.on("message", function (message) {
    message = JSON.parse(message);
    switch (message.event) {
      case "message":
        broadcastMessage(message);
        break;
      case "connecntion":
        broadcastMessage(message);
        break;
    }
  });

  ws.on("stream", function (stream) {
    stream = JSON.parse(stream);
    switch (stream.event) {
      case "stream":
        broadcastAudio(stream);
        break;
      case "connecntion":
        broadcastAudio(stream);
        break;
    }
  });
});

function broadcastMessage(message) {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(message));
  });
}

function broadcastAudio(stream) {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(stream));
  });
}
