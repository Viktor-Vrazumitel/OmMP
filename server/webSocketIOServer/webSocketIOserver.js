const path = require("path");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const ACTIONS = require("../../client/src/clientSocketIO/action");
const PORT = process.env.PORT || 3001;

function getClientRooms() { // список комнат массивом(вроде)
  const { rooms } = io.sockets.adapter;
  return Array.from(rooms.keys());
}

function shareRoomsInfo() { // список доступных комнат, что бы юзер законектился (шарим комнаты всем сокетам)
  io.emit(ACTIONS.SHARE_ROOMS, {
    rooms: getClientRooms()
  })
}

io.on('connection', socket => {
  shareRoomsInfo();

  socket.on(ACTIONS.JOIN, config => {
    const {room: roomID} = config;
    const {rooms: joinedRooms} = socket;

    if (Array.from(joinedRooms).includes(roomID)) { // что бы не подрубались 2 раза в 1 комнату
      return console.warn(`Already joined to ${roomID}`);
    }

    const clients = Array.from(io.sockets.adapter.rooms.get(roomID) || []); // все клиенты к комнате(если есть)

    clients.forEach(clientID => { // свми клиенты
      io.to(clientID).emit(ACTIONS.ADD_PEER, {
        peerID: socket.id,
        createOffer: false
      });

      socket.emit(ACTIONS.ADD_PEER, { // расшариваем друг-другу пиры
        peerID: clientID,
        createOffer: true,
      });
    });

    socket.join(roomID);
    shareRoomsInfo();
  });
});

function leaveRoom() { // логика для выхода из комнаты
  const {rooms} = socket;

  Array.from(rooms)
    // LEAVE ONLY CLIENT CREATED ROOM
    .filter(roomID => validate(roomID) && version(roomID) === 4)
    .forEach(roomID => {

      const clients = Array.from(io.sockets.adapter.rooms.get(roomID) || []);

      clients
        .forEach(clientID => { // отправляем свой ИД все клиентам в рум, что бы они зналиб что мы вышли
        io.to(clientID).emit(ACTIONS.REMOVE_PEER, {
          peerID: socket.id,
        });

        socket.emit(ACTIONS.REMOVE_PEER, { // себе ИД всех клиентов в рум, что бы от них отрубиться
          peerID: clientID,
        });
      });

      socket.leave(roomID);
    });

  shareRoomsInfo();
}

socket.on(ACTIONS.LEAVE, leaveRoom);
socket.on('disconnecting', leaveRoom)

server.listen(PORT, () => {
  console.log("Server IO Started!");
});
