const ws = require("ws");


const wss = new ws.Server(
  {
    port: 5000,
  },
  () => console.log(`Server vzletel 5000`)
);

wss.on("connection", function connection(ws) {
  ws.on("message", function (message) {
    message = JSON.parse(message);
    switch(message.event){
      case 'message':
      broadcastMessage(message)
      break;
      case 'connecntion':
        broadcastMessage(message)
      break;
    }
  });
});

function broadcastMessage(message){
  wss.clients.forEach(client => {
    client.send(JSON.stringify(message))
  })
};



